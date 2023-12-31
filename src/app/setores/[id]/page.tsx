"use client";

import styles from './page.module.css';

import { CardButton, Contact, HeaderWithReturn, Loading, SectorDescription, SimpleData } from '@/components';
import { Cta } from '@/components/Cta';
import { useFetch } from '@/services/useFetch';
import { ISector } from '@/services/api/types/ISector';


export default function Sector({ params }: { params: { id: string } }) {

  const {data} = useFetch<ISector>(`sectors/${params.id}`);

    return (
      <>
        <HeaderWithReturn />
      {data ? (
        <main>
        <div className={`${styles.section} ${styles.intro}`}>
            <h1 className="title">{data?.name}</h1>
            <SectorDescription text={data.description}/>
        </div>
        <section className={`${styles.section}`}>
          {data.infos.length > 0 && (
          <>
            <h2 className="subtitle-1">Informações gerais</h2>
            <div className={styles.generalInfoList}>
              {data.infos.map(info => (
                <SimpleData.Root key={info.id}>
                  <SimpleData.Icon icon={info.icon} />
                  <SimpleData.DataWrapper>
                    <SimpleData.Title text={info.title} />
                    <SimpleData.Description text={info.description} />
                  </SimpleData.DataWrapper>
                </SimpleData.Root>
              ))}
              </div>
              </>)}
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
        ) : <Loading />}

      </>
    );
  }
  