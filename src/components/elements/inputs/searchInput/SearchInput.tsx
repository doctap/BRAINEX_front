import React from 'react';
import styles from './SearchInput.module.scss';

interface ISearchInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  icon: string
  value: string
}

export const SearchInput = (prop: ISearchInput) => {
  return (
    <label className={styles.inputBlock}>
      <img className={styles.icon} src={prop.icon} alt="search" />
      <input
        className={styles.input}
        value={prop.value}
        placeholder={prop.placeholder}
        onChange={prop.onChange}
        type="text"
      />
    </label>
  );
};
