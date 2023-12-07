import Image from 'next/image';
import style from './style.module.css';

type SearchBarProps = {
  text: string;
}

export const SearchBar = ({text}: SearchBarProps) => {
  return (
    <div className={style.searchContainer}>
      <input className={style.searchInput} type='text' placeholder={text} />
      <div className={style.searchButton}><Image src="assets/icone-pesquisa.svg" alt='search icon' width={24} height={24} /></div>
    </div>
  );
}
