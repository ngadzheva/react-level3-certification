import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import LocalStorageComponent from './exercise 1/LocalStorageComponent';
import DialogsExampleComponent from './exercise-2/DialogsExampleComponent';
import AutofilterComponent from './exersice-3/AutofilterComponent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise-1' element={<LocalStorageComponent />} />
      <Route path='/exercise-2' element={<DialogsExampleComponent />} />
      <Route path='/exercise-3' element={<AutofilterComponent />} />
    </Routes>
  );
}

export default App;
