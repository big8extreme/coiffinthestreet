import { LOGIN, LOGOUT, LOG_OUT_ERROR} from '../types/auth';

const defaultStates = {
  user: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  }
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: { ...action.payload.user, token: action.payload.token, isConnected: true } };
    case LOGOUT:
      return { ...state, user: null };
      case LOG_OUT_ERROR:
      return { ...state};
    default:
      return state;
  }
};