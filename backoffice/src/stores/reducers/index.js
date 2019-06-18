import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './authReducer';


export default combineReducers({
  authentification: authReducer,
  user: userReducer
});

