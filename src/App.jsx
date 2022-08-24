import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Table from './screens/Table';
import Form from './screens/Form';
import Home from './screens/Home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={(<Home />)} />
      <Route path="/table" element={(<Table />)} />
      <Route path="/form" element={(<Form />)} />
    </Routes>
  );
}

export default App;
