import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './authReducer';
import configReducer from './config';
import appReducer from './app';
import maraudeReducer from './maraude';


export default combineReducers({
  authentification: authReducer,
  user: userReducer,
  config: configReducer,
  app: appReducer,
  maraude: maraudeReducer,
});

