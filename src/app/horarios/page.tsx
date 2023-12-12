"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { SearchBar } from "@/components/SearchBar";
import { Loading } from "@/components/Loading/Loading";
import { CardButton } from "@/components/CardButton";
import { ISchedule } from "@/services/api/types/ISchedule";

export default function ClassesSchedule() {
    const { data } = useFetch<ISchedule[]>('classes-schedule');
    
    return (
      <div className={styles.container}>
        <HeaderWithReturn />
        <SearchBar text='Pesquisar por turma'/>
        <section className={styles.scheduleList}>
          {data ? (
            data.map(schedule => (
              <CardButton key={schedule.id} icon={schedule.embed.icon} title={schedule.course} link={schedule.embed.link}/>
            ))
          ) : (
             <Loading />
          )}
        </section>
      </div>
    );
}
