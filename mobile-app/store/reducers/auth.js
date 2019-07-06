import { LOGIN, LOGOUT} from '../types/auth';

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
      return { ...state, user: defaultStates.user }; //TODO need to be tested
    default:
      return state;
  }
};
