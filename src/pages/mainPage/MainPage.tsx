import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GameItemList, ManagePanel } from '../../components';
import type { IFiltersSorts, IGameBase } from '../../repository';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
import { fetchGames } from '../../api';
import getData from '../../repository';
import { getColumns } from '../../helpers';
import { type ColumnType } from '../../types';
import styles from './MainPage.module.scss';

const defaultColumn = 3;
const defaultData = {
  providerIds: [],
  groupIds: [],
  gameNameSearchString: '',
  data: {
    games: [],
    groups: [],
    providers: []
  },
  orderNameDesc: false
};

export const MainPage = () => {
  const { data, loading, error } = useAppSelector(state => state.dataSliceReducer);
  const dispatch = useAppDispatch();

  const [games, setGames] = useState<IGameBase[]>([]);
  const [column, setColumn] = useState<ColumnType>(defaultColumn);

  const groups = useMemo(() => (data.groups), [data]);
  const providers = useMemo(() => (data.providers), [data]);

  const refConditions = useRef<IFiltersSorts>({ ...defaultData });
  const gameAmount = useMemo(() => getData({ ...refConditions.current, data }).length, [data]);

  const getFilteredSortedData = (conditions: IFiltersSorts) => {
    setGames(getData({ ...conditions, data }));
  };

  const reset = () => {
    refConditions.current = { ...defaultData };
    setColumn(defaultColumn);
    dispatch(fetchGames());
  };

  const getColumnCount = (count: ColumnType) => {
    setColumn(count);
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
              <GameItemList items={getColumns(games, column)} />
            </div>
            <div className={styles.FilterPanel}>
              <ManagePanel
                reset={reset}
                gamesAmount={gameAmount}
                groups={groups}
                providers={providers}
                onChange={getColumnCount}
                onFilterSort={getFilteredSortedData}
                refConditions={refConditions}
                defaultColumn={defaultColumn}
              />
            </div>
          </div>
          : null
      }
    </main>
  );
};
