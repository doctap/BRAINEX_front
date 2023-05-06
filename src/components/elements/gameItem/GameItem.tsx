import React from 'react';
import type { IGameBase } from '../../../repository';
import styles from './GameItem.module.scss';

type GameItemProps = 'name' | 'cover' | 'coverLarge';

export const GameItem = (prop: Pick<IGameBase, GameItemProps>) => {
  return (
    <div className={styles.img}>
      <img src={prop.cover} alt={prop.name} />
    </div>
  );
};
