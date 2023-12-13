"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, HeaderWithReturn, Loading, SearchBar } from "@/components";

export default function Services({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined },
}) {
  const setor= searchParams;
  const url = setor?.setor ? `procedures/sector/${setor.setor}`: "procedures";
    const { data, loading } = useFetch<IService[]>(url);

    const [services, setServices] = useState<IService[]>();

    useEffect(() => {
      setServices(data || []);
    }, [data])

    const handleSearch = (searchText: string) => {
      if (!searchText) {
        setServices(data || []);
        return;
      }

      const filtered = data?.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setServices(filtered);
    };
    
    return (
      <div className={styles.container}>
        <HeaderWithReturn />

        {loading ? <Loading />:(
          <>
            <SearchBar text='Pesquisar por serviço' onSearch={handleSearch} />
            <section className={styles.servicesList}>
              {services && services.length > 0? (
                services.map((servico, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{opacity: 0, y: -20}}
                >
                  <Card key={servico.id} icon={servico.icon} name={servico.title} id={servico.id} link="/servicos"/>
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
