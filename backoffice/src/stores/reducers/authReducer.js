import { LOG_IN_USER, LOG_OUT_USER } from '../types/auth';

const defaultStates = {
  user: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  }
};

export default (state = defaultStates, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      return { ...state, user: { ...action.payload.user, token: action.payload.token, isConnected: true } };

    case LOG_OUT_USER:
      return defaultStates;

    default:
      return state;
  }
};