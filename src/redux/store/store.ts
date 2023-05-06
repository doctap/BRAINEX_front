import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dataSliceReducer } from '../reducers/DataSlice';

const rootReducer = combineReducers({
  dataSliceReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
