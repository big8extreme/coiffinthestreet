import { SUCCESS_MESSAGE, ERROR_MESSAGE, RESET_MESSAGE } from '../types/app';

const initialState = {
  messages: []
};

export default (state = initialState, { type, payload }) => {
  let { messages } = state;
  switch (type) {

    case SUCCESS_MESSAGE:
      messages.push({ message: payload, color: 'success' });
      return { ...state, messages: [...messages] };

    case ERROR_MESSAGE:
      messages.push({ message: payload, color: 'danger' });
      return { ...state, messages: [...messages] };

    case RESET_MESSAGE:
      return { ...state, messages: [] };

    default:
      return state;
  }
};
