import { FETCH_USER, FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../types/user';
import axios from 'axios';

export const fetchUsers = () => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      dispatch({ type: FETCH_USERS, payload: response.data.users });
    }
    function onError(err) {
      console.log('ERROR WHILE FETCHING USERS', err);
    }
    try {
      const response = await axios.get('/users', { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const createUser = (userData) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      dispatch({ type: CREATE_USER, payload: response.data.user });
    }
    function onError(err) {
      console.log('ERROR WHILE CREATE USER', err);
    }
    try {
      let form = new FormData();
      form.append('email', userData.email);
      form.append('lastName', userData.lastName);
      form.append('firstName', userData.firstName);
      form.append('password', userData.password);
      form.append('job', userData.job);
      form.append('godFatherId', getState().authentification.user.id);
      form.append('avatar', userData.avatar);
      const response = await axios.post('/users', form, {
        headers: { Authorization: `bearer ${getState().authentification.user.token}`, 'Content-Type': 'multipart/form-data' }
      });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const deleteUser = (userId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE CREATE USER', response);
    }
    function onError(err) {
      console.log('ERROR WHILE CREATE USER', err);
    }
    try {
        const response = await  axios.delete(`/users/${userId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
        onSuccess(response);
      }
    catch (err) {
      onError(err);
    }
  };
};