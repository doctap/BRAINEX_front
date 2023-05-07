import React, { useState } from 'react';
import type { SortingItemsTuple, SortingValueType } from '../../../../types';
import styles from './RadioButtons.module.scss';

interface IRadioButtons {
  items: SortingItemsTuple
  onHandlerRadio: (variant: SortingValueType) => void
}

export const RadioButtons = (prop: IRadioButtons) => {
  const [variantType, setVariantType] = useState('');

  const changeVariant = (variant: SortingValueType) => {
    setVariantType(variant);
    prop.onHandlerRadio(variant);
  };

  return (
    <>
      {prop.items.map(x => (
        <div onChange={() => { changeVariant(x.value); }} key={x.name} className={styles.radioButton}>
          <input
            className={styles.radio}
            value={variantType}
            checked={variantType === x.value}
            type="radio"
            name='radio'
            key={x.value}
            id={x.name}
            onChange={() => 0}
          />
          <label
            className={styles.label}
            htmlFor={x.name}
          >
            {x.name}
          </label>
        </div>
      ))}
    </>
  );
};
