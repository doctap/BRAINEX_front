import React, { useState } from 'react';
import { Submit, TextField } from '../../elements';
import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  submit: (login: string, password: string) => Promise<boolean>
  logo: string
  showPasswordIcon: string
  spinner: string
}

export const LoginForm = (prop: ILoginForm) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let login = '';
  let password = '';

  const getLogin = (value: string) => {
    login = value;
  };

  const getPassword = (value: string) => {
    password = value;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login === '' || password === '') {
      return;
    }

    setLoading(true);
    const isLogin = await prop.submit(login.trim(), password);

    if (isLogin) navigate('/');
  };

  return (
    <form
      onSubmit={e => { onSubmit(e); }}
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
        />
        <TextField
          icon={prop.showPasswordIcon}
          onChange={getPassword}
          placeHolder='Password'
          type='password'
        />
      </div>
      <Submit>
        {loading
          ? <img className={styles.spinner} src={prop.spinner} alt="loading..." />
          : 'Login'}
      </Submit>
    </form>
  );
};
