import React from 'react';
import type { IGameBase } from '../../../repository';
import { GameItem } from '../../elements';
import styles from './GameItemList.module.scss';
import { type ColumnType } from '../../../types';

interface IGameItemList {
  items: IGameBase[][]
  column: ColumnType
}

export const GameItemList = (prop: IGameItemList) => {
  return (
    <>
      {prop.items.map((l, i) => (
        <div
          className={styles.row}
          key={i}
        >
          {l.map(x => (
            <GameItem
              isLarge={prop.column === 3}
              key={x.id}
              name={x.name}
              cover={x.cover}
              coverLarge={x.coverLarge}
            />
          ))}
        </div>
      ))}
    </>
  );
};
