export default (
  filtersAndSorts: IFiltersSorts
): IGameBase[] => {
  const { providerIds, groupIds, gameNameSearchString, data, orderNameDesc } = filtersAndSorts;

  const foundBySearch = data.games.filter(g => g.name.toLowerCase().includes(gameNameSearchString.toLowerCase()));

  const gamesIdsByGroups = data.groups.filter(g => groupIds.some(id => id === g.id)).flatMap(x => x.games);
  const gamesIdsByProvidersIds = foundBySearch.filter(c => providerIds.some(id => id === c.provider));

  if (providerIds.length !== 0 && groupIds.length !== 0) {
    const gamesByGroups = foundBySearch.filter(e => gamesIdsByGroups.some(id => e.id === id));
    return gamesByGroups.filter(g => gamesIdsByProvidersIds.some(p => p.id === g.id));
  }

  if (providerIds.length !== 0) {
    return gamesIdsByProvidersIds;
  }

  if (groupIds.length !== 0) {
    return foundBySearch.filter(e => gamesIdsByGroups.some(id => e.id === id));
  }

  return foundBySearch;
};

const getData = (): IData => {
  return undefined as any;
};

export interface IFiltersSorts {
  groupIds: number[]
  providerIds: number[]
  orderNameDesc: boolean
  gameNameSearchString: string
  data: IData
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
