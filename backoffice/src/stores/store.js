<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
=======
import { createStore, applyMiddleware } from 'redux';
>>>>>>> a96217952f55e2672c0b66e406f39c215f7e4531
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

const persistConfig = {
  key: 'XxXxX-XxXxX-XxXxX',
  storage: LocalStorage,
<<<<<<< HEAD
=======
  whitelist: ['authentification']
>>>>>>> a96217952f55e2672c0b66e406f39c215f7e4531
};

const persistedReducer = persistReducer(persistConfig, allReducer);


export default createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);