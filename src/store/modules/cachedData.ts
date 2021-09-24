import { createSlice } from '@reduxjs/toolkit';
import Category from '../../model/Category';

type SliceState = { category?: Category[] };

const initialCacheState: SliceState = {};

const cacheSlice = createSlice({
  name: 'loading',
  initialState: initialCacheState,
  reducers: {},
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice.reducer;
