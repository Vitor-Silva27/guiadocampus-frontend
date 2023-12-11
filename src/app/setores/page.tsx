"use client";

import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import styles from './page.module.css';
import { SearchBar } from '@/components/SearchBar';
import { Card } from '@/components/Card';
import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';

export default function Sectors() {
  const { data } = useFetch<ISimpleSector[]>("http://localhost:3000/sectors");

  return (
    <div className={styles.container}>
      <HeaderWithReturn returnLink='./'/>
      <SearchBar text='Pesquisar por setor'/>
      <section className={styles.sectorsList}>
        {data ? (
          data.map(setor => (
            <Card key={setor.id} icon={setor.icon} name={setor.name} id={setor.id} link='/setores'/>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </section>
    </div>
  );
}