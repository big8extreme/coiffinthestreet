import {baseUrl} from '../../apiUrl';
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
            const response = await axios.get(`${baseUrl}/maraudes`, {headers: {Authorization: `bearer ${getState().auth.user.token}`}})
            onSuccess(response)
        }
        catch(error){
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
            const response = await axios.get(`${baseUrl}/maraudes/${maraudeId}`)
            onSuccess(response)
        }
        catch(error){
            onError(error)
        }
    }
}

export function createMaraude(maraudeFields) {
    return async function(dispatch, getState){
        const { token } = getState().auth.user
        function onSuccess(response){
            console.log("LOG OF SUCCESS !", response.data)
            dispatch({type: CREATE_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        console.log("LOG OF FIELDS !", maraudeFields)

        try {
            const response = await axios.post(`${baseUrl}/maraudes`, {...maraudeFields}) 
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
            console.log("LOG OF SUCCES !", response.data)
            dispatch({type: UPDATE_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        console.log("LOG OF FIELDS !", maraudeFields)

        try {
            const response = await axios.put(`${baseUrl}/maraudes/${maraudeId}`, {...maraudeFields})
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
            console.log("LOG OF SUCCESS !", response.data)
            dispatch({type: DELETE_MARAUDE, payload: response.data.maraude})
        }
        function onError(error){
            dispatch({type: ERROR_ON_MARAUDE, payload: error})
        }
        
        try {
            const response = await axios.delete(`${baseUrl}/maraudes/${maraudeId}`)
        }

        catch(error){
            console.log("LOG OF ERROR !", error)
            onError(error)
        }
    }
}
