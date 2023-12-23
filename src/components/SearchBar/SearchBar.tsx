import Image from 'next/image';
import style from './style.module.css';

type SearchBarProps = {
  text: string;
  onSearch?: (searchText: string) => void;
  focus?: boolean;
}

export const SearchBar = ({ text, onSearch, focus }: SearchBarProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <div className={style.searchContainer}>
      {onSearch ? (
        <input
          className={style.searchInput}
          type="text"
          placeholder={text}
          autoFocus={focus}
          onChange={handleSearch}
        />
      ) : (
        <div className={style.searchInput}>
          Explorar
        </div>
      )}
      <div className={style.searchButton}>
        <Image src="assets/icone-pesquisa.svg" alt="search icon" width={24} height={24} />
      </div>
    </div>
  );
}
