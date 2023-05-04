import React from 'react';
import styles from './App.module.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks/redux';
import { showSlice } from './redux/reducers/ExampleSlice';
import logo from './logo.svg';

function App () {
  const { plusOne, showHideWindow } = showSlice.actions;
  const { counter, isShow } = useAppSelector(st => st.showSlice);
  const dispatch = useAppDispatch();

  const showReact = () => { dispatch(showHideWindow(!isShow)); };
  const setCount = () => { dispatch(plusOne(counter + 1)); };

  return (
    <div className={styles.App}>

      <button
        data-testid='show-btn'
        onClick={showReact}
        className={styles.Click}
      >
          star
      </button>
      <img src={logo} className={styles.AppLogo} alt="logo" />

      {
        isShow
          ? <div data-testid='the-div'>
            <h1 className={styles.h1} data-testid='header'>Happy hacking!{counter}</h1>
            <button data-testid='count-btn' onClick={setCount}>count</button>
          </div>
          : null
      }

    </div>
  );
}

export default App;
