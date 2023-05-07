import React from 'react';
import type { IGameBase } from '../../../repository';
import styles from './GameItem.module.scss';

type PickGameItemProps = 'name' | 'cover' | 'coverLarge';

interface IGameItem {
  isLarge: boolean
}

export const GameItem = (prop: Pick<IGameBase, PickGameItemProps> & IGameItem) => {
  return (
    <>
      {prop.isLarge
        ? <img className={styles.coverLarge} src={prop.coverLarge} alt={prop.name} />
        : <img className={styles.cover} src={prop.cover} alt={prop.name} />}
    </>
  );
};
