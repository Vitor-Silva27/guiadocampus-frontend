"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { SearchBar } from "@/components/SearchBar";
import { Loading } from "@/components/Loading/Loading";
import { CardButton } from "@/components/CardButton";
import { ISchedule } from "@/services/api/types/ISchedule";
import { useEffect, useState } from "react";

export default function ClassesSchedule() {
    const { data, loading } = useFetch<ISchedule[]>('classes-schedule');

    const [schedule, setSchedule] = useState<ISchedule[]>();

    useEffect(() => {
      setSchedule(data || []);
    }, [data])

    const handleSearch = (searchText: string) => {
      if (!searchText) {
        setSchedule(data || []);
        return;
      }

      const filtered = data?.filter(item =>
        item.course.toLowerCase().includes(searchText.toLowerCase())
      );

      setSchedule(filtered);
    };
    
    return (
      <div className={styles.container}>
        <HeaderWithReturn />

      {loading? <Loading />: (
        <>
          <SearchBar text='Pesquisar por turma' onSearch={handleSearch}/>
          <section className={styles.scheduleList}>
            {schedule && schedule.length > 0? (
              schedule.map(schedule => (
                <CardButton key={schedule.id} icon={schedule.embed.icon} title={schedule.course} link={schedule.embed.link}/>
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
