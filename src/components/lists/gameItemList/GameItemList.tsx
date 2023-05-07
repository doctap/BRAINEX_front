import React from 'react';
import type { IGameBase } from '../../../repository';
import { GameItem } from '../../elements';
import styles from './GameItemList.module.scss';

interface IGameItemList {
  items: IGameBase[][]
}

export const GameItemList = (prop: IGameItemList) => {
  return (
    <>
      {prop.items.map((l, i) => (
        <div className={styles.row} key={i}>
          {l.map(x => (
            <GameItem
              isLarge={l.length % 2 !== 0}
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
