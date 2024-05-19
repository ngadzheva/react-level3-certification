import React from 'react';
import parse from 'html-react-parser';
import useAutoFilter from './hooks/useAutofiler';
import Option from './interfaces/Option';

interface AutoFilterDropdownProps<T extends Option> {
  data: T[];
  optionKey: keyof T;
  valueChange: (value: T | null) => void;
}

export default function AutoFilterDropdown<T extends Option>({
  data,
  optionKey,
  valueChange,
}: AutoFilterDropdownProps<T>) {
  const {
    filteredData,
    filterText, 
    setFilterText,
    highlightMatch
  } = useAutoFilter<T>(
    data,
    optionKey
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value)
  }

  const handleItemClick = (item: T) => {
    valueChange(item);
    setFilterText('');
  };

  return (
    <div className='dropdown'>
      <input
        className='dropbtn'
        type='text'
        placeholder='Type to filter'
        value={filterText}
        onChange={handleInputChange}
      />
      <div className='dropdown-content'>
        {filteredData.map(item => (
          <span key={item.id} onClick={() => handleItemClick(item)}>
            {parse(highlightMatch(item[optionKey], filterText))}
          </span>
        ))}
      </div>
    </div>
  );
};
