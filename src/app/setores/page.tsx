"use client";


import styles from './page.module.css';
import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';
import { Card, HeaderWithReturn, Loading, SearchBar } from '@/components';
import { motion } from 'framer-motion';
import { useSearch } from '@/services/hooks/useSearch';
import { useEffect } from 'react';

export default function Sectors() {
  const { data, loading } = useFetch<ISimpleSector[]>(`sectors`);
  const {filteredData, handleSearch, setFilteredData} = useSearch(data || []);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <HeaderWithReturn />
      {loading? <Loading />:
      <>
      <SearchBar text='Pesquisar por setor' onSearch={handleSearch}/>
      <section className={styles.sectorsList}>
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((setor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{opacity: 0, y: -20}}
            >
              <Card key={setor.id} icon={setor.icon} name={setor.name!} id={setor.id!} link='/setores'/>
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