import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function DisplayComponent() {
  const [key, setKey] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const { getItem, getItemsKeys, subscribe } = useLocalStorage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKey(event.target.value);
  }

  useEffect(() => {
    if (key) {
      setValue(getItem(key));

      const unsubscribe = subscribe(key, newValue => {
        setValue(newValue);
      });

      return unsubscribe;
    }
  }, [key, getItem, subscribe]);

  return (
    <div>
      <label>Select key to display</label>
      <select onChange={handleChange}>
        {getItemsKeys().map((itemKey: string) => (
          <option key={itemKey} value={itemKey}>{itemKey}</option>
        ))}
      </select>

      <p>Value: {value}</p>
    </div>
  );
};
