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
      dispatch(fetchMaraudes())
    }
    function onError(err) {
      console.log('ERROR WHILE CREATE MARAUDE', err);
    }
    try {
      let form = new FormData();
      form.append('userId', maraudeData.userId);
      form.append('title', maraudeData.title);
      form.append('description', maraudeData.description);
      form.append('city', maraudeData.city);
      form.append('longitude', maraudeData.longitude);
      form.append('latitude', maraudeData.latitude);
      const response = await axios.post('/maraudes', form, {
        headers: { Authorization: `bearer ${getState().authentification.user.token}`, 'Content-Type': 'multipart/form-data' }
      });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};


export const updateMaraude = (maraudeId) => {
  console.log('DDDDDDDDDDDD')
  return async function (dispatch, getState) {

    function onSuccess(response) {
      console.log('success WHILE update MARAUDES', response);
      dispatch(fetchMaraudes())
    }
    function onError(err) {
      console.log('ERROR WHILE update MARAUDES', err);
    }
    try {
        const response = await  axios.put(`/maraudes/${maraudeId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
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
        dispatch(fetchMaraudes())
      }
      function onError(err) {
        console.log('ERROR WHILE delete MARAUDE', err);
      }
      try {
          const response = await  axios.delete(`/maraudes/${maraudeId}`, { headers: { Authorization: `bearer ${getState().authentification.user.token}` } });
          onSuccess(response);
        }
      catch (err) {
        onError(err);
      }
    };
  };