import axios from 'axios';
import { dataGamesSlice } from '../redux/reducers/DataSlice';
import type { IData } from '../repository';
import type { AppDispatch } from '../redux/store/store';

const SERVER_URL = process.env.SERVER_URL ?? 'http://localhost:5000';

export const login = (login: string, password: string) => {
  try {
    const res = axios.post(`${SERVER_URL}/login`, { login, password });
  } catch (error) {
    // == // == //
  }
};

export const fetchGames = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataGamesSlice.actions.gamesFetching());
    const res = await axios.get<IData>(`${SERVER_URL}/games`);
    dispatch(dataGamesSlice.actions.gamesFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(dataGamesSlice.actions.gamesFetchingError(e.message));
  }
};
