import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './authReducer';
import configReducer from './config';
import appReducer from './app';


export default combineReducers({
  authentification: authReducer,
  user: userReducer,
  config: configReducer,
  app: appReducer,
});

