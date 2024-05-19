import React from 'react';
import { DialogProvider } from './contexts/DialogContext';
import DialogsContainer from './DialogsContainer';
import Menu from '../components/Menu';
import './styles/dialog.css';

export default function DialogsExampleComponent() {
  return (
    <div id='container'>
      <Menu />

      <h1>Custom Dialogs</h1>

      <DialogProvider>
        <DialogsContainer />
      </DialogProvider>
    </div>
  );
};