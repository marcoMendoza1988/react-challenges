import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import elementReducer from '../slice/DataSlice';
import { thunk } from 'redux-thunk';
import { ElementActionTypes } from '../types/elementTypes';

export const store = configureStore({
  reducer: {
    elements: elementReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ElementActionTypes>;
