import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './authReducer';
import configReducer from './config'


export default combineReducers({
  authentification: authReducer,
  user: userReducer,
  config: configReducer
});

