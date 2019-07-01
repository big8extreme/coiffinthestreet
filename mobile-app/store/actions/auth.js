import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR } from '../types/auth'
import { baseUrlApi } from '../../apiUrl'
import { bindActionCreators } from 'redux'
//const thunk = require('redux-thunk').default;

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

export function logout(navigator) {
  console.log('outside async dispatch')
  this.boundActions = bindActionCreators(logout, dispatch);

  return async dispatch => {
    console.log('inside async dispatch')
    axios.defaults.headers.common['Authorization'] = null;
    console.log('login out')
    navigator.navigate('Discover');

    dispatch({ type: LOGOUT, payload: null });
    //return { response, status: 'success' };
  }
};