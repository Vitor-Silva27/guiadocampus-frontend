import { useState } from "react";
import { ISearchItem } from "../api/types/ISearchItem";

export const useSearch = (allData: ISearchItem[]) => {
  const [filteredData, setFilteredData] = useState<ISearchItem[]>(allData);

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setFilteredData(allData);
      return;
    }

    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = allData.filter(({ title, name, course }) => {
      return (
        (title && title.toLowerCase().includes(lowerCaseSearchText)) ||
        (name && name.toLowerCase().includes(lowerCaseSearchText)) ||
        (course && course.toLowerCase().includes(lowerCaseSearchText))
      );
    });

    setFilteredData(filteredData);
  };

  return { handleSearch, filteredData, setFilteredData };
};
