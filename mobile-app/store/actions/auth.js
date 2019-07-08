import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR, LOG_OUT_ERROR } from '../types/auth'
import { baseUrlApi } from '../../apiUrl'
import { bindActionCreators } from 'redux'

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
<<<<<<< HEAD

export function signup(user) {

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

      const response = await axios.post(`${baseUrlApi}/auth/signup`, { ...user });

      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};
=======
>>>>>>> 79afdb31599ea13585d18cb076a43a9b2065088f
