import React from 'react';
import logo from '../../../images/logo.png';
import imgAccount from '../../../images/iconAccount.png';
import styles from './Header.module.scss';

interface IHeader {
  logout: () => Promise<void>
  userName: string
}

export const Header = (prop: IHeader) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <img src={logo} alt='logo' />
      </div>

      <div className={styles.userAccount}>
        <div className={styles.userName}>
          {prop.userName}
        </div>
        <button onClick={() => { prop.logout(); }} className={styles.logout}>
          <img src={imgAccount} alt='user' />
          <div className={styles.cont}>Logout</div>
        </button>
      </div>
    </header>
  );
};
