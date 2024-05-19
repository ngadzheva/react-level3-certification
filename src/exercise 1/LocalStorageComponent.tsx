import React, { useState } from 'react';
import { LocalStorageProvider } from './contexts/LocalStorageContext';
import Menu from '../components/Menu';
import SetterComponent from './SetterComponent';
import DisplayComponent from './DisplayComponent';
import './styles/local-storage.css';

export default function LocalStorageComponent() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <div id='container'>
      <Menu />

      <h1>Local Storage API</h1>

      <LocalStorageProvider>
        <SetterComponent setSelectedKey={setSelectedKey} />
        <DisplayComponent selectedKey={selectedKey} />
      </LocalStorageProvider>
    </div>
  );
};
