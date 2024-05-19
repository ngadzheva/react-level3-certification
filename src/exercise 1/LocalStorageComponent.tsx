import React from 'react';
import { LocalStorageProvider } from './contexts/LocalStorageContext';
import Menu from '../components/Menu';
import SetterComponent from './SetterComponent';
import DisplayComponent from './DisplayComponent';
import './styles/local-storage.css';

export default function LocalStorageComponent() {
  return (
    <div id='container'>
      <Menu />

      <h1>Local Storage API</h1>

      <LocalStorageProvider>
        <SetterComponent />
        <DisplayComponent />
      </LocalStorageProvider>
    </div>
  );
};
