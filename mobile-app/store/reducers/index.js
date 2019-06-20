import { combineReducers } from "redux";
import authReducer from './auth'
import configReducer from './config'
import maraudeReducer from './maraude'

export default combineReducers({
  auth: authReducer,
  maraude: maraudeReducer,
  config: configReducer
});
