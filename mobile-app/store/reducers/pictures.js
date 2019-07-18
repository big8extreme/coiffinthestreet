import { UPLOAD_PICTURES, ERROR_ON_PICTURES } from '../types/pictures';

const defaultStates = {
  pictures: []
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case UPLOAD_PICTURES:
      //Store REDUX : update updated Maraudes in Maraudes List
      return { ...state, pictures: [...action.payload] };
    default:
      return state;
  }
};
