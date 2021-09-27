import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Category from '../../../model/Category';
import Product from '../../../model/Product';

export type CategoryWithToggle = Category & { isShow: boolean };

type SliceState = { category: CategoryWithToggle[]; rawCategory: CategoryWithToggle[]; promoteProducts: Product[] };

const initialCachedState: SliceState = { category: [], rawCategory: [], promoteProducts: [] };

const cachedSlice = createSlice({
  name: 'cached',
  initialState: initialCachedState,
  reducers: {
    setCategory(state, actions: PayloadAction<{ category: CategoryWithToggle[] }>) {
      state.rawCategory = actions.payload.category;
      state.category = actions.payload.category;
    },
    setShowSubCategory(state, actions: PayloadAction<{ id: string; isShow: boolean }>) {
      const position = state.category.findIndex((c) => c.id === actions.payload.id);
      if (position !== -1) {
        const newCategory = [...state.category];
        if (newCategory[position].isShow !== actions.payload.isShow) {
          newCategory[position].isShow = actions.payload.isShow;
          state.category = [...newCategory];
        }
      } else {
        throw new Error('Not find sub category');
      }
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
