import React, { useState } from 'react';
import { IconButton } from '../../buttons';
import styles from './TextField.module.scss';

interface ITextField {
  type: string
  onChange: (value: string) => void
  placeHolder: string
  icon?: string
}

export const TextField = (prop: ITextField) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    const value = elem.value;
    
    setValue(value);
    prop.onChange(value);
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className={styles.TextField}>
      <input
        value={value}
        type={showPassword ? 'text' : prop.type}
        onChange={getValue}
        placeholder={prop.placeHolder}
        className={styles.input}
      />
      {prop.type === 'password'
        ? <div className={styles.visibility}>
          <IconButton
            onClick={toggleVisibility}
          >
            <img src={prop.icon} alt="show" />
          </IconButton>
        </div>
        : null}
    </label>
  );
};
