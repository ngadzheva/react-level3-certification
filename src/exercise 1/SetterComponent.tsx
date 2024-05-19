import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

interface Props {
  setSelectedKey: (key: string | null) => void;
}

export default function SetterComponent({ setSelectedKey }: Props) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const { setItem } = useLocalStorage();

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setItem(key, value);
    setSelectedKey(key);

    setKey('');
    setValue('');
  };

  return (
    <div>
      <input type='text' placeholder='Enter key' value={key} onChange={handleKeyChange} />
      <input type='text' placeholder='Enter value' value={value} onChange={handleValueChange} />
      <button onClick={handleSubmit}>Set Value</button>
    </div>
  );
};
