import React from 'react';
import { RadioButtons } from '../../elements';
import type { SortingItemsTuple, SortingValueType } from '../../../types';
import styles from './SortPanel.module.scss';

interface ISortPanel {
  title: string
  onSort: (sort: SortingValueType) => void
  sortVariants: SortingItemsTuple
}

export const SortPanel = (prop: ISortPanel) => {
  return (
    <>
      <div className={styles.title}>{prop.title}</div>
      <div className={styles.RadioButtons}>
        <RadioButtons items={prop.sortVariants} onHandlerRadio={prop.onSort} />
      </div>
    </>
  );
};
