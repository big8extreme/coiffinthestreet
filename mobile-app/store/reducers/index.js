import { combineReducers } from "redux";
import authReducer from './auth'
import maraudeReducer from './maraude'
import configReducer from './config'

export default combineReducers({
  auth: authReducer,
  maraude: maraudeReducer,
  config: configReducer,
});
