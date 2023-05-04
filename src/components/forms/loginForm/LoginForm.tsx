import React, { useState } from 'react';
import { Button, TextField } from '../../elements';
import styles from './LoginForm.module.scss';

interface ILoginForm {
  submit: (login: string, password: string) => void
  logo: string
  showPasswordIcon: string
  spinner: string
}

export const LoginForm = (prop: ILoginForm) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const getLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    setLogin(elem.value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    setPassword(elem.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login === '' || password === '') {
      return;
    }

    setLoading(true);
    prop.submit(login, password);
    // TODO: send the login request
    console.log('Logging in...');
  };

  return (
    <form
      onSubmit={onSubmit}
      className={styles.loginForm}
    >
      <div className={styles.logoBlock}>
        <img src={prop.logo} alt='logo' />
      </div>
      <div className={styles.TextFields}>
        <TextField
          onChange={getLogin}
          placeHolder='Login'
          type='text'
          value={login}
        />
        <TextField
          icon={prop.showPasswordIcon}
          onChange={getPassword}
          placeHolder='Password'
          type='password'
          value={password}
        />
      </div>
      <Button onClick={() => 0}>
        {loading
          ? <img className={styles.spinner} src={prop.spinner} alt="loading..." />
          : 'Login'}
      </Button>
    </form>
  );
};
