import { FETCH_MARAUDES } from '../types/maraude';

const defaultStates = {
  maraudes: []
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case FETCH_MARAUDES:
      return { ...state, maraudes: [...action.payload] };
    default:
      return state;
  }
};