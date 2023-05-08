import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GameItemList, ManagePanel } from '../../components';
import type { IFilterSort, IGameBase } from '../../repository';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
import { fetchGames, logout } from '../../api';
import getData from '../../repository';
import { getColumns } from '../../helpers';
import type { IUserLocalStorage, ColumnType, SortingValueType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/headers';
import sortGames from '../../helpers/getSortedGames';
import burgerIcon from '../../images/icon-burger.png';
import styles from './MainPage.module.scss';

const defaultColumn = 3;
const defaultData: IFilterSort = {
  providerIds: [],
  groupIds: [],
  gameNameSearchString: '',
  data: {
    games: [],
    groups: [],
    providers: []
  },
  sortType: 'alphabetic-order'
};

export const MainPage = () => {
  const { data, loading, error } = useAppSelector(state => state.dataSliceReducer);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const user: IUserLocalStorage = JSON.parse(localStorage.getItem('user') as string);

  const [games, setGames] = useState<IGameBase[]>([]);
  const [column, setColumn] = useState<ColumnType>(defaultColumn);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 428);

  const handleResize = () => {
    const size = document.documentElement.clientWidth;

    if (size < 428) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  window.addEventListener('resize', handleResize);

  const groups = useMemo(() => (data.groups), [data]);
  const providers = useMemo(() => (data.providers), [data]);

  const refConditions = useRef<IFilterSort>({ ...defaultData });

  const getFilteredData = (conditions: IFilterSort) => {
    setGames(getData({ ...conditions, data }));
  };

  const reset = () => {
    refConditions.current = { ...defaultData };
    setColumn(defaultColumn);
    if (user.token !== null) {
      dispatch(fetchGames(user.token));
    } else {
      navigate('/login');
    }
  };

  const getLogout = async () => {
    if (user.token !== null) {
      logout(user.token).then(b => { b ? navigate('/login') : null; });
    }
  };

  const getColumnCount = (count: ColumnType) => {
    setColumn(count);
  };

  useEffect(() => {
    setGames(getData({ ...refConditions.current, data }));
  }, [data]);

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchGames(user.token)).then(r => { r ? null : navigate('/login'); });
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Header userName={user?.userName} logout={getLogout} />
      <main className={styles.main}>
        {error !== '' ? <h1>{error}</h1> : null}
        {
          !loading
            ? <div className={
              isSmallScreen
                ? `${styles.content} ${styles.content_mobileVersion}`
                : `${styles.content}`
            }>
              <div className={styles.items}>
                <GameItemList items={getColumns(games, isSmallScreen ? 2 : column)} />
              </div>
              <div className={styles.FilterPanel}>
                <ManagePanel
                  mobileVersion={isSmallScreen}
                  burgerButtonIcon={burgerIcon}
                  reset={reset}
                  gamesAmount={games.length}
                  groups={groups}
                  providers={providers}
                  onChange={getColumnCount}
                  onFilter={getFilteredData}
                  refConditions={refConditions}
                  defaultColumn={defaultColumn}
                />
              </div>
            </div>
            : null
        }
      </main>
    </>
  );
};
