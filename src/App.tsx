import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { MainPage } from './MainPage';

function App() {
  library.add(fab, faLanguage);
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
