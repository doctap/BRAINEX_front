import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IShow {
  isShow: boolean
  counter: number
}

const initialState: IShow = {
  isShow: false,
  counter: 0
};

export const showSlice = createSlice({
  name: 'showSlice',
  initialState,
  reducers: {
    plusOne (state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
    showHideWindow (state, action: PayloadAction<boolean>) {
      state.isShow = action.payload;
    }
  }
});

export default showSlice.reducer;
