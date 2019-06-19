import {
  FETCH_MARAUDES,
  ERROR_ON_MARAUDES,
  FETCH_MARAUDE,
  ERROR_ON_MARAUDE,
  CREATE_MARAUDE,
  ERROR_ON_CREATE_MARAUDE,
  UPDATE_MARAUDE,
  ERROR_ON_UPDATE_MARAUDE,
  DELETE_MARAUDE,
  ERROR_ON_DELETE_MARAUDE
} from "../types/maraude";

const defaultStates = {
  maraudes: [],
};

export default function(state = defaultStates, action) {
  switch (action.type) {
    case FETCH_MARAUDES:
      return { ...state, maraudes: [...action.payload] };
    case ERROR_ON_MARAUDES:
      return state;
    case FETCH_MARAUDE:
      return { ...state };
    case ERROR_ON_MARAUDE:
      return state;
    case CREATE_MARAUDE:
      return { ...state };
    case ERROR_ON_CREATE_MARAUDE:
      return state;
    case UPDATE_MARAUDE:
      return { ...state };
    case ERROR_ON_UPDATE_MARAUDE:
      return state;
    case DELETE_MARAUDE:
      return { ...state };
    case ERROR_ON_DELETE_MARAUDE:
      return state;
    default:
      return state;
  }
}