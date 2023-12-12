import { SimpleHeader } from '@/components/SimpleHeader';
import styles from './page.module.css'
import { SearchBar } from '@/components/SearchBar';
import { CardButton } from '@/components/CardButton';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <SimpleHeader />
      <h1 className={`title ${styles.mainTitle}`}>Explore os setores do campus</h1>
      <SearchBar text='Pesquisar...'/>
      <div className={styles.mainCardsContainer}>
          <CardButton link='/setores' title='Setores' icon='hat' main/>
          <CardButton link='https://relogioonline.com.br/horario/' title='Horários' icon='clock'/>
          <CardButton link='https://www.google.com/maps/place/R.+Padre+%C3%81ureo,+243,+Pedro+II+-+PI,+64255-000/@-4.4377125,-41.4567112,17z/data=!3m1!4b1!4m5!3m4!1s0x79390111d4cc271:0x3930eca83b9797bc!8m2!3d-4.4377179!4d-41.4541363?entry=ttu' title='Mapa' icon='map'/>
          <CardButton link='/servicos' title='Protocolos' icon='doc'/>
      </div>
    </div>
  );
}
