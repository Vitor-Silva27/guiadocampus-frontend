"use client";


import styles from './page.module.css';
import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';
import { Card, HeaderWithReturn, Loading, SearchBar } from '@/components';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Sectors() {
  const { data, loading } = useFetch<ISimpleSector[]>(`sectors`);
  const [sectors, setSectors] = useState<ISimpleSector[]>();

  useEffect(() => {
    setSectors(data || []);
  }, [data])

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setSectors(data || []);
      return;
    }

    const filtered = data?.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSectors(filtered);
  };

  return (
    <div className={styles.container}>
      <HeaderWithReturn />
      {loading? <Loading />:
      <>
      <SearchBar text='Pesquisar por setor' onSearch={handleSearch}/>
      <section className={styles.sectorsList}>
        {sectors && sectors.length > 0 ? (
          sectors.map((setor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{opacity: 0, y: -20}}
            >
              <Card key={setor.id} icon={setor.icon} name={setor.name} id={setor.id} link='/setores'/>
            </motion.div>
          ))
        ) : (
          <p className='subtitle-2'>Não há dados!</p>
        )}
      </section>
      </>}
    </div>
  );
}