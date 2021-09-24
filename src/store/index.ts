import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loadingReducer from './modules/loading';
import cachedReducer from './modules/cachedData';

const store = configureStore({
  reducer: combineReducers({
    loading: loadingReducer,
    cached: cachedReducer,
  }),
});
export default store;
