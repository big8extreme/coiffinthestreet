import {baseUrlApi} from '../../apiUrl';
import { FETCH_MARAUDES, FETCH_MARAUDE, CREATE_MARAUDE, ERROR_ON_MARAUDE, UPDATE_MARAUDE, DELETE_MARAUDE } from '../types/maraude';
import axios from 'axios';

export function fetchMaraudes() {
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            dispatch({type: FETCH_MARAUDES, payload: response.data.maraudes})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        try {
            const response = await axios.get(`${baseUrlApi}/maraudes`, {headers: {Authorization: `bearer ${getState().auth.user.token}`}})
            onSuccess(response)
        }
        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}

export function fetchMaraude(maraudeId) {
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            dispatch({type: FETCH_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        try {
            const response = await axios.get(`${baseUrlApi}/maraudes/${maraudeId}`, {headers: {Authorization: `bearer ${getState().auth.user.token}`}})
            onSuccess(response)
        }
        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}

export function createMaraude(maraudeFields) {
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            dispatch({type: CREATE_MARAUDE, payload: response.data.maraude})
            return {status: 'success', maraude: response.data.maraude}
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }

        try {
            const response = await axios.post(`${baseUrlApi}/maraudes`, {...maraudeFields, userId: getState().auth.user.id}, {headers: {Authorization: `bearer ${getState().auth.user.token}`}}) 
            onSuccess(response)
        }
        
        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}

export function updateMaraude(maraudeFields, maraudeId){
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            dispatch({type: UPDATE_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }

        try {
            const response = await axios.put(`${baseUrlApi}/maraudes/${maraudeId}`, {...maraudeFields}, {headers: {Authorization: `bearer ${getState().auth.user.token}`}})
        }

        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}

export function deleteMaraude(maraudeId){
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            dispatch({type: DELETE_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        
        try {
            const response = await axios.delete(`${baseUrlApi}/maraudes/${maraudeId}`, {headers: {Authorization: `bearer ${getState().auth.user.token}`}})
        }

        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}
