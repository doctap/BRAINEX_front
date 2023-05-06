import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FilterPanel, GameItemList } from '../../components';
import type { IFiltersSorts, IGameBase } from '../../repository';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
import { fetchGames } from '../../api';
import getData from '../../repository';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { data, loading, error } = useAppSelector(state => state.dataSliceReducer);
  const dispatch = useAppDispatch();
  const [games, setGames] = useState<IGameBase[]>([]);

  const groups = useMemo(() => (data.groups), [data]);
  const providers = useMemo(() => (data.providers), [data]);

  const refConditions = useRef<IFiltersSorts>({
    providerIds: [],
    groupIds: [],
    gameNameSearchString: '',
    data: {
      games: [],
      groups: [],
      providers: []
    },
    orderNameDesc: false
  });

  const getFilteredSortedData = (conditions: IFiltersSorts) => {
    setGames(getData({ ...conditions, data }));
  };

  useEffect(() => {
    setGames(getData({ ...refConditions.current, data }));
  }, [data]);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <main className={styles.main}>
      {error !== '' ? <h1>{error}</h1> : null}
      {
        !loading
          ? <div className={styles.content}>
            <div className={styles.items}>
              <GameItemList items={games} />
            </div>
            <div className={styles.FilterPanel}>
              <FilterPanel
                refConditions={refConditions}
                groups={groups}
                providers={providers}
                onFilterSort={getFilteredSortedData}
              />
            </div>
          </div>
          : null
      }
    </main>
  );
};
