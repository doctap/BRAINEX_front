import React from 'react';
import styles from './Submit.module.scss';

interface ISubmit {
  onClick?: () => void
  children: React.ReactNode
}

export const Submit = (prop: ISubmit) => {
  return (
    <button type='submit' className={styles.button} onClick={prop.onClick}>
      {prop.children}
    </button>
  );
};
