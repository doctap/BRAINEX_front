import React, { useRef, memo } from 'react';
import { TermList } from '../../lists';
import type { ITerm } from '../../../types';
import styles from './SelectBlock.module.scss';

interface ISelectBlock {
  title: string
  terms: ITerm[]
  getSelectedIds: (ids: number[]) => void
}

export const SelectBlock = memo((prop: ISelectBlock) => {
  const refIds = useRef<number[]>([]);

  const getSelectedId = (id: number) => {
    const idIndex = refIds.current.findIndex(x => x === id);

    idIndex !== -1 ? refIds.current.splice(idIndex, 1) : refIds.current.push(id);
    prop.getSelectedIds(refIds.current);
  };

  return (
    <div className={styles.selectBlock}>
      <div className={styles.title}>
        {prop.title}
      </div>
      <div className={styles.list}>
        <TermList terms={prop.terms} getId={getSelectedId} />
      </div>
    </div>
  );
});
