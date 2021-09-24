import { createSlice } from '@reduxjs/toolkit';
import Category from '../../model/Category';
import Product from '../../model/Product';

export type CategoryWithToggle = Category & { isShow: boolean };

type SliceState = { category: CategoryWithToggle[]; promoteProducts: Product[] };

const initialCacheState: SliceState = { category: [], promoteProducts: [] };

const cacheSlice = createSlice({
  name: 'cached',
  initialState: initialCacheState,
  reducers: {
    setCategory(state, actions) {
      state.category = actions.payload.category;
    },
    setShowSubCategory(state, actions) {
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
    setPromoteProduct(state, actions) {
      state.promoteProducts = actions.payload.products;
    },
  },
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice.reducer;
