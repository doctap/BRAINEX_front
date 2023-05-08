import { type SortingValueType } from '../types';
import getSortedGames from '../helpers/getSortedGames';

export default (
  filtersAndSorts: IFilterSort
): IGameBase[] => {
  const { providerIds, groupIds, gameNameSearchString, data, sortType } = filtersAndSorts;

  const foundBySearch = data.games.filter(g => g.name.toLowerCase().includes(gameNameSearchString.toLowerCase()));

  const gamesIdsByGroups = data.groups.filter(g => groupIds.some(id => id === g.id)).flatMap(x => x.games);
  const gamesIdsByProvidersIds = foundBySearch.filter(c => providerIds.some(id => id === c.provider));

  if (providerIds.length !== 0 && groupIds.length !== 0) {
    const gamesByGroups = foundBySearch.filter(e => gamesIdsByGroups.some(id => e.id === id));

    const groupsProviders = gamesByGroups.filter(g => gamesIdsByProvidersIds.some(p => p.id === g.id));
    return getSortedGames(sortType, groupsProviders);
  }

  if (providerIds.length !== 0) {
    return getSortedGames(sortType, gamesIdsByProvidersIds);
  }

  if (groupIds.length !== 0) {
    const groups = foundBySearch.filter(e => gamesIdsByGroups.some(id => e.id === id));
    return getSortedGames(sortType, groups);
  }

  return getSortedGames(sortType, foundBySearch);
};

export interface IFilterSort {
  groupIds: number[]
  providerIds: number[]
  gameNameSearchString: string
  data: IData
  sortType: SortingValueType
}

export interface IData {
  games: IGame[]
  providers: IProvider[]
  groups: IGroups[]
}

export interface IGameBase {
  id: number
  name: string
  cover: string
  coverLarge: string
}

export interface IGame extends IGameBase {
  provider: number
  date: string
}

interface IProvider {
  id: number
  name: string
  logo: string
}

interface IGroups {
  id: number
  name: string
  games: number[]
}
