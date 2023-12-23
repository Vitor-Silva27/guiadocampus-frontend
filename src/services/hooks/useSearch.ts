import { useState } from "react";

interface ISearchItem {
  id?: string;
  title?: string;
  name?: string;
  icon: string;
  link?: string;
}

export const useSearch = (allData: ISearchItem[]) => {
  const [filteredData, setFilteredData] = useState<ISearchItem[]>(allData);

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setFilteredData(allData);
      return;
    }

    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = allData.filter((item) =>
      item.title
        ? item.title.toLowerCase().includes(lowerCaseSearchText)
        : item.name?.toLowerCase().includes(lowerCaseSearchText)
    );

    setFilteredData(filteredData);
  };

  return { handleSearch, filteredData, setFilteredData };
};
