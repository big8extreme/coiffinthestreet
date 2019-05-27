import { LOGIN, LOGOUT, } from '../types/auth';

const initialState = {
  isConnected: false,
  expire: 3600,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isConnected: true, };
    case LOGOUT:
      return { ...state, isConnected: false, };
    default:
      return state;
  }
};