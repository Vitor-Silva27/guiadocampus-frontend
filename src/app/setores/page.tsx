import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import styles from './page.module.css';
import { SearchBar } from '@/components/SearchBar';
import { SectorCard } from '@/components/SectorCard';

export default function Setores() {
    return (
      <div className={styles.container}>
        <HeaderWithReturn returnLink='./'/>
        <SearchBar text='Pesquisar por setor'/>
        <section className={styles.sectorsList}>
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
            <SectorCard id='123' icon="./assets/book.svg" name='Biblioteca' />
        </section>
      </div>
    );
  }
  