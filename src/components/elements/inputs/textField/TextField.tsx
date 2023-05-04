import React, { useState } from 'react';
import { IconButton } from '../../buttons';
import styles from './TextField.module.scss';

interface ITextField {
  value: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder: string
  icon?: string
}

export const TextField = (prop: ITextField) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.TextField}>
      <input
        value={prop.value}
        type={showPassword ? 'text' : prop.type}
        onChange={prop.onChange}
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
    </div>
  );
};
