import React from 'react';
import type { IGameBase } from '../../../repository';
import { GameItem } from '../../elements';

interface IGameItemList {
  items: IGameBase[]
}

export const GameItemList = (prop: IGameItemList) => {
  return (
    <>
      {prop.items.map(x => (
        <GameItem key={x.id} name={x.name} cover={x.cover} coverLarge={x.coverLarge} />
      ))}
    </>
  );
};
