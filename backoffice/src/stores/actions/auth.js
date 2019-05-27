import axios from 'axios';
import { LOG_IN_USER, LOG_OUT_USER, LOG_IN_ERROR } from '../types/auth';

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      dispatch({ type: LOG_IN_USER, payload: response.data });
      return response;
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      return error;
    }
    try {
      const response = await axios.post('/auth/signin', { email, password });
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
}

export function logout(userData) {
  return {
    type: LOG_OUT_USER,
    payload: null
  };
}