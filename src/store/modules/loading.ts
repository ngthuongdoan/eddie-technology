import { createSlice } from '@reduxjs/toolkit';

type SliceState = { isLoading: boolean };

// First approach: define the initial state using that type

const initialLoadingState: SliceState = { isLoading: true };

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {
    loaded(state) {
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
