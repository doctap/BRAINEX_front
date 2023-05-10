import React, { useState } from 'react';
import { InformModalWindow, LoginForm } from '../../components';
import icon from '../../images/icons__show-password.png';
import logo from '../../images/logo.png';
import spinner from '../../images/spinner.png';
import styles from './LoginPage.module.scss';
import { login } from '../../api';

export const LoginPage = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);

  const showModal = () => {
    setShowModalWindow(true);
  };

  const hideModal = () => {
    setShowModalWindow(false);
  };

  return (
    <div className={styles.loginPage}>
      <LoginForm inValidCredentials={showModal} submit={login} spinner={spinner} logo={logo} showPasswordIcon={icon} />
      {showModalWindow
        ? <InformModalWindow message='You entered not valid credentials' onClick={hideModal} title='Sorry' />
        : null}
    </div>
  );
};
