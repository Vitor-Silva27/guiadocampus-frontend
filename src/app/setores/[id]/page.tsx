"use client";

import { SimpleData } from '@/components/SimpleData';
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { Contact } from '@/components/Contact';
import { CardButton } from '@/components/CardButton';
import { Cta } from '@/components/Cta';
import { useFetch } from '@/services/useFetch';
import { ISector } from '@/services/api/types/ISector';
import { SectorDescription } from '@/components/SectorDescription';

export default function Sector({ params }: { params: { id: string } }) {

  const {data} = useFetch<ISector>(`https://guiadocampus-api.onrender.com/sectors/${params.id}`);

    return (
      <>
        <HeaderWithReturn />
      {data && (
        <main>
        <div className={`${styles.section} ${styles.intro}`}>
            <h1 className="title">{data?.name}</h1>
            <SectorDescription text={data.description}/>
        </div>
        <section className={`${styles.section}`}>
            <h2 className="subtitle-1">Informações gerais</h2>
            <div className={styles.generalInfoList}>
              {data.infos.length > 0 ? data.infos.map(info => (
                <SimpleData.Root key={info.id}>
                  <SimpleData.Icon icon={info.icon} />
                  <SimpleData.DataWrapper>
                    <SimpleData.Title text={info.title} />
                    <SimpleData.Description text={info.description} />
                  </SimpleData.DataWrapper>
                </SimpleData.Root>
              )):  <p className={`body-text`}>Não possuimos informações sobre esse setor!</p>}
            </div>
        </section>

        <section className={`${styles.section}`}>
          <h2 className="subtitle-1">Contatos</h2>
          {data.contacts.map(contact => (
            <Contact key={contact.id} title={contact.title} responsible={contact.responsible} email={contact.email} phone={contact.phone} />
          ))}
        </section>

        <section className={`${styles.section} ${styles.cardsSection}`}>
          {
            data.embeds.map(embed => (
              <CardButton key={embed.id} title={`ver ${embed.title}`} icon={embed.icon} link={embed.link}/>
            ))

          }
        </section>

        {data.services.length > 0 && (
          <div className={styles.buttonContainer}>
              <Cta text='Serviços e protocolos' link={`/servicos?setor=${params.id}`}/>
          </div>
        )}
        </main>
        )}

      </>
    );
  }
  