import React from 'react';
import styles from './App.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, MainPage } from './pages';

function App () {
  return (
    <div className={styles.app}>
      <Routes>
        {/* <Route path='/' element={<Navigate to="login"/>} /> */}
        {/* <Route path= '/' element={<LoginPage />} /> */}
        <Route path= '/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
