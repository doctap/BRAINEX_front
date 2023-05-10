import React from 'react';
import styles from './InformModalWindow.module.scss';

interface IInformModalWindow {
  title: string
  message: string
  onClick: () => void
}

export const InformModalWindow = (prop: IInformModalWindow) => {
  return (
    <div onClick={prop.onClick} className={styles.shadow}>
      <div className={styles.modal}>
        <div className={styles.title}>
          {prop.title}
        </div>
        <div className={styles.message}>
          {prop.message}
        </div>
        <div className={styles.buttonBlock}>
          <button className={styles.button} onClick={prop.onClick}>ok</button>
        </div>
      </div>
    </div>
  );
};
