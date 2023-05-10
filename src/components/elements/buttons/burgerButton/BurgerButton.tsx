import React from 'react';
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
  onClick: () => void
  nameOff: string
  nameOn: string
  icon: string
  toggle: boolean
}

export const BurgerButton = (prop: IBurgerButton) => {
  return (
    <button
      onClick={prop.onClick}
      className={styles.BurgerButton}
    >
      <img className={styles.img} src={prop.icon} alt='' />
      {prop.toggle ? `${prop.nameOn}` : `${prop.nameOff}`}
    </button>
  );
};
