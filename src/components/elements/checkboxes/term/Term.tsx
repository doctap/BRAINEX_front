import React, { useState } from 'react';
import styles from './Term.module.scss';

export interface ITermProp {
  getId: (id: number) => void
  id: number
  name: string
}

export const Term = (prop: ITermProp) => {
  const [value, setValue] = useState(false);
  
  const check = () => {
    setValue(!value);
    prop.getId(prop.id);
  };

  return (
    <div className={styles.term}>
      <input
        className={styles.checkbox}
        checked={value}
        onChange={check}
        type="checkbox"
        id={`${prop.name}-${prop.id}`}
      />
      <label
        className={styles.label}
        htmlFor={`${prop.name}-${prop.id}`}
      >
        {prop.name}
      </label>
    </div>
  );
};
