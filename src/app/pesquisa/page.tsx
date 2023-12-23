"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { HeaderWithReturn, Loading, SearchBar, SimpleData } from "@/components";
import { useSearch } from "@/services/hooks/useSearch";
import { useMainSearch } from "./useMainSearch";

export default function Pesquisa() {
  const { allData, loading } = useMainSearch();
  const { filteredData, handleSearch, setFilteredData } = useSearch(allData);

  useEffect(() => {
    if (allData.length > 0) {
      setFilteredData(allData);
    }
  }, [allData]);

  if (loading) {
    return (
      <>
        <HeaderWithReturn />
        <Loading />
      </>
    );
  }

  const renderData = () => {
    if (filteredData.length > 0) {
      return filteredData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link href={data.link!}>
            <SimpleData.Root>
              <SimpleData.Icon icon={data.icon!} />
              <SimpleData.DataWrapper>
                <SimpleData.Title text={data.title!} />
              </SimpleData.DataWrapper>
              <RiArrowRightSLine className={styles.arrow} />
            </SimpleData.Root>
          </Link>
          <hr className={styles.line} />
        </motion.div>
      ));
    } else {
      return <p className="subtitle-2">Nada encontrado!</p>;
    }
  };

  return (
    <>
      <HeaderWithReturn />
      <div className={styles.searchBarContainer}>
        <SearchBar text="pesquisar..." onSearch={handleSearch} focus />
      </div>
      <section className={styles.servicesList}>
        <div className={styles.dataList}>{renderData()}</div>
      </section>
    </>
  );
}
