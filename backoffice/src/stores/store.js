<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
=======
import { createStore, applyMiddleware } from 'redux';
>>>>>>> 6c05dc517e3887bf223cc397a9da33238022e516
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

const persistConfig = {
  key: 'XxXxX-XxXxX-XxXxX',
  storage: LocalStorage,
  whitelist: ['authentification']
};

const persistedReducer = persistReducer(persistConfig, allReducer);


export default createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);