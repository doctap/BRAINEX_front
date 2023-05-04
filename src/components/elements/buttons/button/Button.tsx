import React from 'react';
import styles from './Button.module.scss';

interface IButton {
  onClick: () => void
  children: React.ReactNode
}

export const Button = (prop: IButton) => {
  return (
    <button className={styles.button} onClick={prop.onClick}>
      {prop.children}
    </button>
  );
};
