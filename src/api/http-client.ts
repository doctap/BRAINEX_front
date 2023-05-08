import axios from 'axios';
import { dataGamesSlice } from '../redux/reducers/DataSlice';
import type { IData } from '../repository';
import type { AppDispatch } from '../redux/store/store';
import type { IUserLocalStorage } from '../types';

const SERVER_URL = process.env.SERVER_URL ?? 'http://localhost:5000';

export const login = async (login: string, password: string) => {
  try {
    const res = await axios.post<IUserLocalStorage>(`${SERVER_URL}/login`, { login, password });

    if (res.status === 200) {
      localStorage.setItem('user', JSON.stringify(res.data));
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = async (token: string) => {
  try {
    await axios.delete(`${SERVER_URL}/logout/${token}`);
    localStorage.removeItem('user');

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchGames = (token: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataGamesSlice.actions.gamesFetching());
    const res = await axios.get<IData>(
      `${SERVER_URL}/games/${token}`
    );

    dispatch(dataGamesSlice.actions.gamesFetchingSuccess(res.data));

    return true;
  } catch (e: any) {
    dispatch(dataGamesSlice.actions.gamesFetchingError(e.message));

    localStorage.removeItem('user');
    return false;
  }
};
