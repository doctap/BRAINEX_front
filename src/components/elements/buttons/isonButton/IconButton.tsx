import React from 'react';
import styles from './IconButton.module.scss';

interface IIconButton {
  children: React.ReactNode
  onClick: () => void
}

export const IconButton = (prop: IIconButton) => {
  return (
    <button type='button' onClick={prop.onClick} className={styles.iconButton}>
      {prop.children}
    </button>
  );
};
