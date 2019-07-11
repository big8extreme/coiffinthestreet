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
      dispatch(fetchUsers());
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
      form.append('isAdmin', userData.isAdmin);
      form.append('isActive', userData.isActive);
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


export const updateUser = (userData, userId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE update USER', response);
      dispatch(fetchUsers());
    }
    function onError(err) {
      console.log('ERROR WHILE update USER', err);
    }
    try {
      if (userData.password === undefined || userData.password === '') {
        delete userData.password;
      }
      const response = await axios.put(`/users/${userId}`, { ...userData }, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
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
      console.log('success WHILE delete USER', response);
      dispatch(fetchUsers());
    }
    function onError(err) {
      console.log('ERROR WHILE delete USER', err);
    }
    try {
      const response = await axios.delete(`/users/${userId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const updateUserStatut = (userData, userId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE update USER', response);
      dispatch(fetchUsers());
    }
    function onError(err) {
      console.log('ERROR WHILE update USER', err);
    }
    try {
      const response = await axios.put(`/users/${userId}`, { ...userData }, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};