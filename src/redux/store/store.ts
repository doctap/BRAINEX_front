import { configureStore, combineReducers } from '@reduxjs/toolkit';
import showSlice from '../reducers/ExampleSlice';

const rootReducer = combineReducers({
  showSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
