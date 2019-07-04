import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR, LOG_OUT_ERROR } from '../types/auth'
import { baseUrlApi } from '../../apiUrl'
import { bindActionCreators } from 'redux'
//const thunk = require('redux-thunk').default;

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      console.log("success")
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
            console.log("error")

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
// export function logout(userId) {
//   return async dispatch => {
//     function onSuccess(response) {
//       // set token as default header
//       axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
//       console.log('sucess')
//        dispatch({ type: LOGOUT, payload: response.data });
//       return { response, status: 'success' };
//     }
//     function onError(error) {
//       console.log('error')

//        dispatch({ type: LOG_OUT_ERROR, error });
//       return { error, status: 'error' };
//     }
//     try {
//       const response = await axios.post(`${baseUrlApi}/auth/logout`, { userId});
//       return onSuccess(response);
//     }
//     catch (err) {
//       return onError(err);
//     }
//   };
//   // this.boundActions = bindActionCreators(logout, dispatch);

//   // return async dispatch => {
//   //   console.log('inside async dispatch')
//   //   axios.defaults.headers.common['Authorization'] = null;
//   //   console.log('login out')
//   //   navigator.navigate('Discover');

//   //   dispatch({ type: LOGOUT, payload: null });
//   //   //return { response, status: 'success' };
//   // }
//   //redirect to default route (front)

//  //Backend : Check how to revoke jwt token ?
//  //Backend Create Route for logout

//  //return or dispatch ==> Send info to redux
//  //into redux ==> Clear  
// };