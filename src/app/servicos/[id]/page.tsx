"use client";

import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import { ServiceDescription } from "./components/description";
import styles from "./page.module.css";
import { HeaderWithReturn, CardButton } from "@/components";


export default function Service({ params }: { params: { id: string } }) {
  const {data} = useFetch<IService>(`procedures/${params.id}`);
    return (
      <>
       <HeaderWithReturn />
      {data && (
        <main>
          <h1 className={`title ${styles.serviceTitle}`}>{data.title}</h1>
          <ServiceDescription text={data.description}/>
          <section className={`${styles.section} ${styles.cardsSection}`}>
          {
            data.embeds.map(embed => (
              <CardButton key={embed.id} title={`ver ${embed.title}`} icon={embed.icon} link={embed.link} main/>
            ))
          }
        </section>
        </main>
      )}

      </>
    );
}
