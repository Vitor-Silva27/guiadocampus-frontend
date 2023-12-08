import { SimpleData } from '@/components/SimpleData';
import styles from './page.module.css';
import { HeaderWithReturn } from "@/components/HeaderWithReturn";
import { Contact } from '@/components/Contact';
import { CardButton } from '@/components/CardButton';
import { Cta } from '@/components/Cta';

export default function Sector() {
    return (
      <>
        <HeaderWithReturn returnLink="/setores"/>
        <div className={`${styles.section} ${styles.intro}`}>
            <h1 className="title">Biblioteca</h1>
            <p className={`body-text`}>
                A Biblioteca do Instituto Federal – Campus Pedro II é tecnicamente responsável
                pelo provimento de informações bibliográficas necessárias às atividades de ensino,
                pesquisa e extensão da comunidade interna da Instituição.
            </p>
        </div>
        <section className={`${styles.section}`}>
            <h2 className="subtitle-1">Informações gerais</h2>
            <div className={styles.generalInfoList}>
              <SimpleData.Root>
                <SimpleData.Icon icon='/assets/clock-light.svg' />
                <SimpleData.DataWrapper>
                  <SimpleData.Title text='Dias de funcionamento'/>
                  <SimpleData.Description text='De segunda a sexta' />
                </SimpleData.DataWrapper>
              </SimpleData.Root>
              <SimpleData.Root>
                <SimpleData.Icon icon='/assets/clock-light.svg' />
                <SimpleData.DataWrapper>
                  <SimpleData.Title text='Dias de funcionamento'/>
                  <SimpleData.Description text='De segunda a sexta' />
                </SimpleData.DataWrapper>
              </SimpleData.Root>
              <SimpleData.Root>
                <SimpleData.Icon icon='/assets/clock-light.svg' />
                <SimpleData.DataWrapper>
                  <SimpleData.Title text='Dias de funcionamento'/>
                  <SimpleData.Description text='De segunda a sexta' />
                </SimpleData.DataWrapper>
              </SimpleData.Root>
              <SimpleData.Root>
                <SimpleData.Icon icon='/assets/clock-light.svg' />
                <SimpleData.DataWrapper>
                  <SimpleData.Title text='Dias de funcionamento'/>
                  <SimpleData.Description text='De segunda a sexta' />
                </SimpleData.DataWrapper>
              </SimpleData.Root>
            </div>
        </section>

        <section className={`${styles.section}`}>
          <h2 className="subtitle-1">Contatos</h2>
          <Contact />
        </section>

        <section className={`${styles.section} ${styles.cardsSection}`}>
          <CardButton title='Baixar quadro de horários' icon='/assets/clock-dark.svg' link='' main/>
          <CardButton title='Ver normas' icon='/assets/doc-light.svg' link=''/>
        </section>

        <div className={styles.buttonContainer}>
            <Cta text='Serviços e protocolos' link=''/>
        </div>

      </>
    );
  }
  