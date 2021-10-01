import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loadingReducer from './modules/loading/reducer';
import cachedReducer from './modules/cached/reducer';
import cartReducer from './modules/cart/reducer';

const reducer = combineReducers({
  loading: loadingReducer,
  cached: cachedReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => (process.env.NODE_ENV !== 'production' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
});
export default store;
