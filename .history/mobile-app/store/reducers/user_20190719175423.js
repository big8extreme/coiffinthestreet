import { SET_USER_LOCATION, CONTACT_ADMIN, ERROR_ON_CONTACT } from '../types/user';

const initialState = {
  location: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USER_LOCATION:
      return { ...state, location: payload };
    case CONTACT_ADMIN:
      return state;
    case ERROR_ON_CONTACT:
      return state;
    default:
      return state;
  }
};