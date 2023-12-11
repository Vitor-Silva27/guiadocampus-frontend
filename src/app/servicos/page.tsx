"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/Card";

export default function Services() {
    const { data } = useFetch<IService[]>("http://localhost:3000/procedures");

    return (
      <div className={styles.container}>
        <HeaderWithReturn returnLink='./'/>
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
