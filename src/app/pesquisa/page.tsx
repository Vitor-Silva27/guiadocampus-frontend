"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

import { useFetch } from '@/services/useFetch';
import { ISimpleSector } from '@/services/api/types/ISector';
import { IService } from '@/services/api/types/IService';
import { ISchedule } from '@/services/api/types/ISchedule';
import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import { SearchBar } from '@/components/SearchBar';
import { Loading } from '@/components/Loading/Loading';
import { SimpleData } from '@/components/SimpleData';
import styles from './page.module.css';

interface AllDataItem {
  title: string;
  icon: string;
  link: string;
}

export default function Pesquisa() {
  const { data: sectorData, loading: sectorLoading } = useFetch<ISimpleSector[]>(`sectors`);
  const { data: serviceData, loading: servicesLoading } = useFetch<IService[]>(`procedures`);
  const { data: scheduleData, loading: scheduleLoading } = useFetch<ISchedule[]>(`classes-schedule`);

  const [allData, setAllData] = useState<AllDataItem[]>([]);
  const [filteredData, setFilteredData] = useState<AllDataItem[]>([]);

  const searchBarRef = useRef<HTMLInputElement | null>(null); 

  useEffect(() => {
    if (searchBarRef.current) {
      searchBarRef.current.focus();
    }
  }, []);

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setFilteredData(allData);
      return;
    }

    const filtered = allData.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    const newAllData: AllDataItem[] = [];

    sectorData?.forEach((sector) => {
      newAllData.push({
        title: sector.name,
        icon: sector.icon,
        link: "setores/"+sector.id,
      });
    });

    serviceData?.forEach((service) => {
      newAllData.push({
        title: service.title, 
        icon: service.icon,
        link: "servico/" + service.id,
      });
    });

    scheduleData?.forEach((schedule) => {
      newAllData.push({
        title: schedule.course,
        icon: schedule.embed.icon,
        link: schedule.embed.link,
      });
    });

    setAllData(newAllData);
    setFilteredData(newAllData);
  }, [sectorData, serviceData, scheduleData]);

  return (
    <>
      <HeaderWithReturn />
      {(sectorLoading || servicesLoading || scheduleLoading) ? (
        <Loading />
      ) : (
        <>
          <div className={styles.searchBarContainer}>
            <SearchBar text='pesquisar...' onSearch={handleSearch} inputRef={searchBarRef}/>
          </div>
          <section className={styles.servicesList}>
            <div className={styles.dataList}>
              {filteredData.length > 0 ? (
                filteredData.map((dado, index) => (
                  <React.Fragment key={index}>
                    <Link href={dado.link}>
                      <SimpleData.Root>
                        <SimpleData.Icon icon={dado.icon} />
                        <SimpleData.DataWrapper>
                          <SimpleData.Title text={dado.title} />
                        </SimpleData.DataWrapper>
                        <RiArrowRightSLine className={styles.arrow} />
                      </SimpleData.Root>
                    </Link>
                    <hr className={styles.line} />
                  </React.Fragment>
                ))
              ) : (
                <p className='subtitle-2'>Nada encontrado!</p>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );  
};