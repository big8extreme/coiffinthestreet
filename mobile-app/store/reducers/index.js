import { combineReducers } from "redux";
import authReducer from './auth';
import photosReducer from '../reducers/photos'

export default combineReducers({
  photos: photosReducer
});