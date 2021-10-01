import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Category from '../../../model/Category';
import Product from '../../../model/Product';

type SliceState = { category: Category[]; rawCategory: Category[]; promoteProducts: Product[] };

const initialCachedState: SliceState = { category: [], rawCategory: [], promoteProducts: [] };

const cachedSlice = createSlice({
  name: 'cached',
  initialState: initialCachedState,
  reducers: {
    setCategory(state, actions: PayloadAction<{ category: Category[] }>) {
      state.rawCategory = actions.payload.category;
      state.category = actions.payload.category;
    },
    resetCategory(state) {
      state.category = [...state.rawCategory];
    },
    setPromoteProduct(state, actions: PayloadAction<{ products: Product[] }>) {
      state.promoteProducts = actions.payload.products;
    },
  },
});

export const cachedActions = cachedSlice.actions;

export default cachedSlice.reducer;
