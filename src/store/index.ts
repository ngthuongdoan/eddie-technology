import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loadingReducer from './modules/loading';
import cachedReducer from './modules/cachedData';

const reducer = {
  loading: loadingReducer,
  cached: cachedReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
