import { SET_USER_LOCATION } from '../types/user';

const initialState = {
  location: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USER_LOCATION:
      return { ...state, location: payload };

    default:
      return state;
  }
};