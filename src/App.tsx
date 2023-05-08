import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage, MainPage, PageNotFound } from './pages';
import styles from './App.module.scss';

function App () {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
