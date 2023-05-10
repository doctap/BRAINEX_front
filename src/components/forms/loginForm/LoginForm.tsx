import React, { useState } from 'react';
import { Submit, TextField } from '../../elements';
import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  submit: (login: string, password: string) => Promise<boolean>
  logo: string
  showPasswordIcon: string
  spinner: string
  inValidCredentials: () => void
}

export const LoginForm = (prop: ILoginForm) => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    const value = elem.value;

    setLogin(value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    const value = elem.value;

    setPassword(value);
  };

  const resetForm = () => {
    prop.inValidCredentials();
    setLoading(false);
    setLogin('');
    setPassword('');
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login === '' || password === '') {
      return;
    }

    setLoading(true);
    const isLogin = await prop.submit(login.trim(), password);

    isLogin ? navigate('/') : resetForm();
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
          value={login}
          onChange={getLogin}
          placeHolder='Login'
          type='text'
        />
        <TextField
          value={password}
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
