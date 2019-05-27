import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR } from '../types/auth'

const baseUrl = 'http://192.168.1.68:5000/api/v1'

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      dispatch({ type: LOGIN, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      return { error, status: 'error' };
    }
    try {
      const response = await axios.post(`${baseUrl}/auth/signin`, { email, password });
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function logout() {
  return {
    type: LOGOUT,
    payload: null
  }
};