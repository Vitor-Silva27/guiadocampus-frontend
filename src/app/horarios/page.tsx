"use client";

import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { ISchedule } from "@/services/api/types/ISchedule";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardButton, HeaderWithReturn, Loading, SearchBar } from "@/components";
import { useSearch } from "@/services/hooks/useSearch";

export default function ClassesSchedule() {
  const { data, loading } = useFetch<ISchedule[]>('classes-schedule');
  
  const { filteredData, handleSearch, setFilteredData } = useSearch(data || []);
  
  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <HeaderWithReturn />

      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchBar text="Pesquisar por turma" onSearch={handleSearch} />
          <section className={styles.scheduleList}>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={styles.cardContainer}
                >
                  <CardButton key={schedule.id} icon={schedule.embed?.icon} title={schedule.course!} link={schedule.embed!.link} />
                </motion.div>
              ))
            ) : (
              <p className="subtitle-2">Não há dados!</p>
            )}
          </section>
        </>
      )}
    </div>
  );
}
