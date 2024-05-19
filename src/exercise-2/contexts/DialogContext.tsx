import React, { createContext, useState } from 'react';
import { DialogConfig } from '../iterfaces/Dialog';
import DialogComponent from '../DialogComponent';

interface DialogContextType {
  isOpen: boolean;
  showDialog: (config: DialogConfig) => void;
  closeDialog: () => void;
}

interface DialogProviderProps {
  children: React.ReactNode;
}

export const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>({ content: null });

  const showDialog = (config: DialogConfig) => {
    setDialogConfig(config);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <DialogContext.Provider value={{ isOpen, showDialog, closeDialog }}>
      {children}
      {isOpen && (
        <DialogComponent
          title={dialogConfig.title}
          content={dialogConfig.content}
          actions={dialogConfig.actions}
          shouldDisplayCloseButton={dialogConfig.shouldDisplayCloseButton}
          shouldDisplayCloseX={dialogConfig.shouldDisplayCloseX}
          onClose={closeDialog}
          isOpen={isOpen}
          isModal={dialogConfig.isModal}
        />
      )}
    </DialogContext.Provider>
  );
};
