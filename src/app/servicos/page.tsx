"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/Card";

export default function Services({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined },
}) {
  const setor= searchParams;
  const url = setor?.setor ? `procedures/sector/${setor.setor}`: "procedures";
    const { data } = useFetch<IService[]>(url);
    
    return (
      <div className={styles.container}>
        <HeaderWithReturn />
        <SearchBar text='Pesquisar por serviço'/>
        <section className={styles.servicesList}>
          {data ? (
            data.map(servico => (
              <Card key={servico.id} icon={servico.icon} name={servico.title} id={servico.id} link="/servicos"/>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </section>
      </div>
    );
}
