import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Elements } from '../types/elementTypes';

interface DataState {
  data: Elements
}

const initialState: DataState = {
  data: {
    first: [],
    last: []
  },
};

const DataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<Elements>) => {
      console.log(action)
      state.data = action.payload;
    }
  },
});

export const { addElement } = DataSlice.actions;

export const selectData = (state: RootState) => state.elements.data;

export default DataSlice.reducer;
