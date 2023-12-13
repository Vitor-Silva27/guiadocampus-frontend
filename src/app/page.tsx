"use client";

import styles from './page.module.css'
import { useFetch } from '@/services/useFetch';
import { IMap } from '@/services/api/types/IMap';
import { CardButton, Loading, SearchBar, SimpleHeader } from '@/components';
import Link from 'next/link';

export default function Home() {
  const { data, loading } = useFetch<IMap[]>(`map`);

  return (
    <div className={styles.homeContainer}>
      <SimpleHeader />
      <h1 className={`title ${styles.mainTitle}`}>Explore os setores do campus</h1>
      <Link href={"/pesquisa"}>
        <SearchBar text='Explore...' />
      </Link>
      {loading && <Loading />}
      {data && (<div className={styles.mainCardsContainer}>
          <CardButton link='/setores' title='Setores' icon='hat' main/>
          <CardButton link='/horarios' title='Horários' icon='clock'/>
          <CardButton link={data[0].embed.link} title='Mapa' icon='map'/>
          <CardButton link='/servicos' title='Serviços' icon='doc'/>
      </div>)}
    </div>
  );
}
