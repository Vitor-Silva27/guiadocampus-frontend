"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/Card";
import { Loading } from "@/components/Loading/Loading";
import { useEffect, useState } from "react";

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
                services.map(servico => (
                  <Card key={servico.id} icon={servico.icon} name={servico.title} id={servico.id} link="/servicos"/>
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
