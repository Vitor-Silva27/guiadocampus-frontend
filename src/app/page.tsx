import { SimpleHeader } from '@/components/SimpleHeader';
import styles from './page.module.css'
import { SearchBar } from '@/components/SearchBar';
import { CardButton } from '@/components/CardButton';
import { CardButtonsContainer } from '@/components/CardButtonsContainer';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <SimpleHeader />
      <h1 className={`title ${styles.mainTitle}`}>Explore os setores do campus</h1>
      <SearchBar text='Pesquisar...'/>
      <div className={styles.mainCardsContainer}>
        <CardButtonsContainer>
          <CardButton link='https://www.google.com' title='Setores' icon='assets/hat.svg' main/>
          <CardButton link='https://www.google.com' title='Horários' icon='assets/clock-light.svg'/>
          <CardButton link='https://www.google.com' title='Mapa' icon='assets/map-light.svg'/>
          <CardButton link='https://www.google.com' title='Protocolos' icon='assets/doc-light.svg'/>
        </CardButtonsContainer>
      </div>
    </div>
  );
}
