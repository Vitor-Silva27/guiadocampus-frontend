import Image from 'next/image';
import style from './style.module.css';

type SearchBarProps = {
  text: string;
  onSearch: (searchText: string) => void;
}

export const SearchBar = ({ text, onSearch }: SearchBarProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        type='text'
        placeholder={text}
        onChange={handleSearch}
      />
      <div className={style.searchButton}>
        <Image src="assets/icone-pesquisa.svg" alt='search icon' width={24} height={24} />
      </div>
    </div>
  );
}