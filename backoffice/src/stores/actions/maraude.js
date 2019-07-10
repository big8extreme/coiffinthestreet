import { FETCH_MARAUDES, FETCH_MARAUDE, CREATE_MARAUDE, UPDATE_MARAUDE, DELETE_MARAUDE } from '../types/maraude';
import axios from 'axios';

export const fetchMaraudes = () => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      dispatch({ type: FETCH_MARAUDES, payload: response.data.maraudes });
    }
    function onError(err) {
      console.log('ERROR WHILE FETCHING USERS', err);
    }
    try {
      const response = await axios.get('/maraudes', { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const createMaraude = (maraudeData) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: CREATE_MARAUDE, payload: response.data.maraude });
      dispatch(fetchMaraudes());
    }
    function onError(err) {
      console.log('ERROR WHILE CREATE MARAUDE', err);
    }
    try {
      maraudeData.userId = getState().authentification.user.id;
      const response = await axios.post('/maraudes', maraudeData, {
        headers: { Authorization: `bearer ${getState().authentification.user.token}` }
      });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};


export const updateMaraude = (maraudeFields, maraudeId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE update MARAUDES', response);
      dispatch(fetchMaraudes());
    }
    function onError(err) {
      console.log('ERROR WHILE update MARAUDES', err);
    }
    try {
      const response = await axios.put(`/maraudes/${maraudeId}`, maraudeFields, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};


export const deleteMaraude = (maraudeId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE delete MARAUDE', response);
      dispatch(fetchMaraudes());
    }
    function onError(err) {
      console.log('ERROR WHILE delete MARAUDE', err);
    }
    try {
      const response = await axios.delete(`/maraudes/${maraudeId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const deletePicture = (pictureId) => {
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE delete PICTURE', response);
      dispatch(fetchMaraudes());
    }
    function onError(err) {
      console.log('ERROR WHILE delete PICTURE', err);
    }
    try {
      const response = await axios.delete(`/pictures/${pictureId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};