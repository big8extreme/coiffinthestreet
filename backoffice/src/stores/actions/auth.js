import axios from 'axios';
import { LOG_IN_USER, LOG_OUT_USER, LOG_IN_ERROR } from '../types/auth';
import { successMessage, errorMessage } from './app';

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOG_IN_USER, payload: response.data });
      dispatch(successMessage('Connexion réussi !'));
      return response;
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      dispatch(errorMessage('Connexion échouée !'));
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
  axios.defaults.headers.common['Authorization'] = null;
  return {
    type: LOG_OUT_USER,
    payload: null
  };
}