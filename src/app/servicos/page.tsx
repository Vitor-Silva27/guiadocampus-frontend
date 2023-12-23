"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, HeaderWithReturn, Loading, SearchBar } from "@/components";
import { useSearch } from "@/services/hooks/useSearch";

export default function Services({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined },
}) {
  const setor= searchParams;
  const url = setor?.setor ? `procedures/sector/${setor.setor}`: "procedures";
    const { data, loading } = useFetch<IService[]>(url);

    const {filteredData, handleSearch, setFilteredData} = useSearch(data || []);

    useEffect(() => {
      if (data && data.length > 0) {
        setFilteredData(data);
      }
    }, [data]);
    
    return (
      <div className={styles.container}>
        <HeaderWithReturn />

        {loading ? <Loading />:(
          <>
            <SearchBar text='Pesquisar por serviço' onSearch={handleSearch} />
            <section className={styles.servicesList}>
              {filteredData && filteredData.length > 0? (
                filteredData.map((servico, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{opacity: 0, y: -20}}
                >
                  <Card key={servico.id} icon={servico.icon} name={servico.title!} id={servico.id!} link="/servicos"/>
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
