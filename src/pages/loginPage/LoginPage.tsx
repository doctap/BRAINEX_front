import React from 'react';
import { LoginForm } from '../../components';
import icon from '../../images/icons__show-password.png';
import logo from '../../images/logo.png';
import spinner from '../../images/spinner.png';
import styles from './LoginPage.module.scss';
import { login } from '../../api';

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LoginForm submit={login} spinner={spinner} logo={logo} showPasswordIcon={icon} />
    </div>
  );
};
