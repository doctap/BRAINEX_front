import React from 'react';
import styles from './ActionButton.module.scss';

interface IActionButton {
  name: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const ActionButton = (prop: IActionButton) => {
  return (
    <button type={prop.type} className={styles.ActionButton} onClick={prop.onClick}>
      {prop.name}
    </button>
  );
};
