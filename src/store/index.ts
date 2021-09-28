import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loadingReducer from './modules/loading/reducer';
import cachedReducer from './modules/cached/reducer';
import cartReducer from './modules/cart/reducer';

const reducer = {
  loading: loadingReducer,
  cached: cachedReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
