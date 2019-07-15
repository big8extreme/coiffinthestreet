import { UPLOAD_PICTURES, ERROR_ON_PICTURES } from '../types/pictures';

const defaultStates = {
  pictures: []
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case UPLOAD_PICTURES:
      return { ...state };
    case ERROR_ON_PICTURES:
      return state;
    default:
      return state;
  }
};
