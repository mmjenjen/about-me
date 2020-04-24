import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { MainPage } from './MainPage';

function App() {
  library.add(fab);
  return (
    <div className="App">
      <MainPage language='ENG' />
    </div>
  );
}

export default App;
