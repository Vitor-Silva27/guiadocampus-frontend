import { SimpleHeader } from '@/components/SimpleHeader';
import styles from './page.module.css'
import { SearchBar } from '@/components/SearchBar';
import { CardButton } from '@/components/CardButton';

export default function Home() {
  return (
    <>
      <SimpleHeader />
      <h1 className={`title ${styles.mainTitle}`}>Explore os setores do campus</h1>
      <SearchBar text='Pesquisar...'/>
      <CardButton link='https://www.google.com' title='titulo' icon='assets/clock-light.svg'/>
    </>
  );
}
