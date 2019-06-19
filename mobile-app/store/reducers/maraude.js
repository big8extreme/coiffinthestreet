import { FETCH_MARAUDES, FETCH_MARAUDE, CREATE_MARAUDE, UPDATE_MARAUDE, DELETE_MARAUDE } from '../types/maraude';

const defaultStates = {
  maraudes: []
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case FETCH_MARAUDES:
      return { ...state, maraudes: [...action.payload] };
    case FETCH_MARAUDE:
      return { ...state };
    case CREATE_MARAUDE:
      return { ...state };
    case UPDATE_MARAUDE:
      return { ...state };
    case DELETE_MARAUDE:
      return { ...state };
    default:
      return state;
  }
};
