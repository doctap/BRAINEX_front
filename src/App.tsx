import React from 'react';
import styles from './App.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages';

function App () {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to="login"/>} /> */}
      <Route path= '/' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
