import { combineReducers } from "redux";
import authReducer from './auth'
import maraudeReducer from './maraude'

export default combineReducers({
  auth: authReducer,
  maraude: maraudeReducer
});