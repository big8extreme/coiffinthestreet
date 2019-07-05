import { FETCH_MARAUDES, ERROR_ON_MARAUDES, FETCH_MARAUDE, ERROR_ON_MARAUDE, CREATE_MARAUDE, ERROR_ON_CREATE_MARAUDE, UPDATE_MARAUDE, ERROR_ON_UPDATE_MARAUDE, DELETE_MARAUDE, ERROR_ON_DELETE_MARAUDE } from '../types/maraude'
import axios from 'axios'
import { baseUrlApi } from '../../apiUrl'

export function fetchMaraudes(){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: FETCH_MARAUDES, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_MARAUDES, payload: error})
        }
        try{
            const response = await axios.get(`${baseUrlApi}/maraudes`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function showMaraude(maraudeId){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: FETCH_MARAUDE, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_MARAUDE, payload: error})
        }   
        try{
            const response = await axios.get(`${baseUrlApi}/maraudes/${maraudeId}`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function createMaraude(maraudeFields){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: CREATE_MARAUDE, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_CREATE_MARAUDE, payload: error})
        }
        try{
            const response = await axios.post(`${baseUrlApi}/maraudes/`, { ...maraudeFields }, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function updateMaraude(maraudeId, maraudeFields){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: UPDATE_MARAUDE, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_UPDATE_MARAUDE, payload: error})
        }
        try{
            const response = await axios.put(`${baseUrlApi}/maraudes/`, { ...maraudeFields }, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function deleteMaraude(maraudeId){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: DELETE_MARAUDE, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_DELETE_MARAUDE, payload: error})
        }
        try{
            const response = await axios.delete(`${baseUrlApi}/maraudes/${maraudeId}`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}
