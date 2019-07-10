import { SUCCESS_MESSAGE, ERROR_MESSAGE, RESET_MESSAGE } from '../types/app';

export function successMessage(message) {
  return {
    type: SUCCESS_MESSAGE,
    payload: message
  };
}

export function errorMessage(message) {
  return {
    type: ERROR_MESSAGE,
    payload: message
  };
}

export function resetMessage() {
  return {
    type: RESET_MESSAGE,
    payload: null
  };
}