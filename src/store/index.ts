import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loadingReducer from './modules/loading/reducer';
import cachedReducer from './modules/cached/reducer';

const reducer = {
  loading: loadingReducer,
  cached: cachedReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
