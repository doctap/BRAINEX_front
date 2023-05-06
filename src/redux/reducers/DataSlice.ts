import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IData } from '../../repository';

interface IDataFetching {
  data: IData
  loading: boolean
  error: string
}

const initialState: IDataFetching = {
  data: {
    games: [],
    groups: [],
    providers: []
  },
  loading: false,
  error: ''
};

export const dataGamesSlice = createSlice({
  name: 'dataGamesSlice',
  initialState,
  reducers: {
    gamesFetching (state) {
      state.loading = true;
    },
    gamesFetchingSuccess (state, action: PayloadAction<IData>) {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    gamesFetchingError (state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const dataSliceReducer = dataGamesSlice.reducer;
