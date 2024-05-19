import { useState } from 'react';
import Option from '../interfaces/Option';

interface AutoFilterResult<T extends Option> {
  filteredData: T[];
  filterText: string;
  setFilterText: (filterText: string) => void;
  highlightMatch: (text: string, filterText: string) => string;
}

const useAutoFilter = <T extends Option>(
  data: T[],
  optionKey: keyof T
): AutoFilterResult<T> => {
  const [filterText, setFilterText] = useState<string>('');

  const filteredData = data.filter(item =>
    item[optionKey].toLowerCase().includes(filterText.toLowerCase())
  );

  const highlightMatch = (text: string, filterText: string) => {
    const index = text.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase());
  
    if (index >= 0) {
        const start = text.substring(0, index);
        const middle = text.substring(index, filterText.length + index);
        const end = text.substring(filterText.length + index);
      
        return (`${start}<b>${middle}</b>${end}`);
    }
  
    return text;
  };

  return { filteredData, filterText, setFilterText, highlightMatch };
};

export default useAutoFilter;