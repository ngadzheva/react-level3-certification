import { useContext } from 'react';
import { LocalStorageContext } from '../contexts/LocalStorageContext';

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);

  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }

  return context;
};
