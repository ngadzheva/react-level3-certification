import React, { createContext } from 'react';
import { localStorageService } from '../services/local-storage.service';

type LocalStorageContextType = {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  getItemsKeys: () => string[];
  removeItem: (key: string) => void;
  subscribe: (key: string, callback: (value: string | null) => void) => () => void;
};

export const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

interface LocalStorageProviderProps {
  children: React.ReactNode;
}

export const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({ children }) => {
  return (
    <LocalStorageContext.Provider value={localStorageService}>
      {children}
    </LocalStorageContext.Provider>
  );
};
