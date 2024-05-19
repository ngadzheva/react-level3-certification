import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

interface Props {
  selectedKey: string | null;
}

export default function DisplayComponent({ selectedKey }: Props) {
  const [key, setKey] = useState<string | null>(selectedKey);
  const [value, setValue] = useState<string | null>(null);
  const [itemsKeys, setItemsKeys] = useState<string[]>([]);
  const { getItem, getItemsKeys, subscribe } = useLocalStorage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKey(event.target.value);
  }

  useEffect(() => {
    if (itemsKeys.length === 0) {
      setItemsKeys(getItemsKeys());
    }
  }, [itemsKeys, setItemsKeys, getItemsKeys]);

  useEffect(() => {
    if (selectedKey && !itemsKeys.includes(selectedKey)) {
      const newKeys = [...itemsKeys, selectedKey];
      setItemsKeys(newKeys);
      setKey(selectedKey);
    }
  }, [selectedKey, itemsKeys, setItemsKeys]);

  useEffect(() => {
    if (!key) {
      setKey(itemsKeys[0]);
    }

    setValue(getItem(key!));

    const unsubscribe = subscribe(key!, newValue => {
      setValue(newValue);
    });

    return unsubscribe;
  }, [key, itemsKeys, getItem, subscribe]);

  return (
    <div>
      <label>Select key to display</label>
      <select onChange={handleChange} value={key ?? undefined}>
        {itemsKeys.map((itemKey: string) => (
          <option key={itemKey} value={itemKey}>{itemKey}</option>
        ))}
      </select>

      <p>Value: {value}</p>
    </div>
  );
};
