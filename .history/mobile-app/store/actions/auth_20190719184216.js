import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR, LOG_OUT_ERROR, FORGET_PASSWORD, FORGET_PASSWORD_ERROR } from '../types/auth'
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

export function signup(user) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {

      dispatch({ type: LOG_IN_ERROR, error });
      let status = "error";
      if (error.response.data.message === "Invitation code is invalid") {
        status = 'invalid_code'
      }
      return { error: error.response, status };

    }

    try {
      const splitedAvatarUrl = user.avatar.uri.split('/')
      const originalFileName = splitedAvatarUrl[splitedAvatarUrl.length - 1]
      let originalFileExt = originalFileName.split('.')
      originalFileExt = originalFileExt[originalFileExt.length - 1]
      const formData = new FormData();
      formData.append('firstName', user.firstName)
      formData.append('lastName', user.name)
      formData.append('email', user.email)
      formData.append('invitationCode', user.invitationCode)
      formData.append('password', user.password)
      formData.append('avatar', {
        uri: user.avatar.uri,
        name: originalFileName,
        type: `image/${originalFileExt}`
      }, user.avatar.name)

      const response = await axios.post(`${baseUrlApi}/auth/signup`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Accept": 'application/json'
        }
      });

      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};


export function forgetPassword(email) {
  return async (dispatch, getState) => {
      function onSuccess(response) {
          dispatch({ type: CONTACT_ADMIN })
          return { response, status: 'success' };
      }
      function onError(error) {
          dispatch({ type: ERROR_ON_CONTACT, payload: error })
          return { error, status: 'error' };
      }

      try {
          const response = await Axios.post(`${baseUrlApi}/auth/reset`, { email : email }, {
              headers: { Authorization: `bearer ${getState().auth.user.token}` }
          })
          return onSuccess(response)
      }
      catch (err) {
          return onError(err)
      }
  }
}