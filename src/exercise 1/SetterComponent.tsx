import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function SetterComponent() {
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
  };

  return (
    <div>
      <input type='text' placeholder='Enter key' value={key} onChange={handleKeyChange} />
      <input type='text' placeholder='Enter value' value={value} onChange={handleValueChange} />
      <button onClick={handleSubmit}>Set Value</button>
    </div>
  );
};
