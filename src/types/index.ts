import { type sortingItems } from '../contentData';

export interface ITerm {
  id: number
  name: string
}

export type ColumnType = 2 | 3 | 4;

export type SortingItemsTuple = typeof sortingItems;
export type SortingValueType = SortingItemsTuple[number]['value']

export interface IUserLocalStorage {
  userName: string
  token: string
}
