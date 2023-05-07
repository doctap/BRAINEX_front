import { type IGameBase } from '../../repository';
import { type ColumnType } from '../../types';

export const getColumns = (items: IGameBase[], splitter: ColumnType): IGameBase[][] => {
  const columns: IGameBase[][] = []; let i; let k;

  for (i = 0, k = -1; i < items.length; i++) {
    if (i % splitter === 0) {
      k++;
      columns[k] = [];
    }
    columns[k].push(items[i]);
  }
  return columns;
};
