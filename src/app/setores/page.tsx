"use client";

import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import styles from './page.module.css';
import { SearchBar } from '@/components/SearchBar';
import { Card } from '@/components/Card';
import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';
import { Loading } from '@/components/Loading/Loading';
import { useEffect, useState } from 'react';

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
          sectors.map(setor => (
            <Card key={setor.id} icon={setor.icon} name={setor.name} id={setor.id} link='/setores'/>
          ))
        ) : (
          <p className='subtitle-2'>Não há dados!</p>
        )}
      </section>
      </>}
    </div>
  );
}