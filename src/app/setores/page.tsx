"use client";

import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import styles from './page.module.css';
import { SearchBar } from '@/components/SearchBar';
import { Card } from '@/components/Card';
import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';
import { Loading } from '@/components/Loading/Loading';

export default function Sectors() {
  const { data } = useFetch<ISimpleSector[]>(`https://guiadocampus-api.onrender.com/sectors`);

  return (
    <div className={styles.container}>
      <HeaderWithReturn />
      <SearchBar text='Pesquisar por setor'/>
      <section className={styles.sectorsList}>
        {data ? (
          data.map(setor => (
            <Card key={setor.id} icon={setor.icon} name={setor.name} id={setor.id} link='/setores'/>
          ))
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
}