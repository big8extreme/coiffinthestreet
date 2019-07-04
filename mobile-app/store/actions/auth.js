import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR } from '../types/auth'
import { baseUrlApi } from '../../apiUrl'

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      return { error, status: 'error' };
    }
    try {
      const response = await axios.post(`${baseUrlApi}/auth/signin`, { email, password });
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function logout() {
  axios.defaults.headers.common['Authorization'] = null;
  return {
    type: LOGOUT,
    payload: null
  }
};

export function signup(user) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header

      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      console.log("SUCESS")

      dispatch({ type: LOGIN, payload: response.data });

      return { response, status: 'success' };

    }

    function onError(error) {

      console.log("ERROR")

console.log(error);

      dispatch({ type: LOG_IN_ERROR, error });

      return { error, status: 'error' };

    }

    try {

      console.log('USER SIGNUP FORM ')

      console.log(user)

      const response = await axios.post(`${baseUrlApi}/auth/signup`, { ...user });

      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};