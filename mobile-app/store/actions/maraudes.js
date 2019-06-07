import {baseUrl} from '../../apiUrl';
import { FETCH_MARAUDES, ERROR_ON_MARAUDE } from '../types/maraude';
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
            const response = await axios.get(`${baseUrl}/maraudes`, {...maraudefield})
            onSuccess(response)
        }
        catch(error){
            onError(error)
        }
    }
}

/*
try {
    const response = await axios.get(`${baseUrl}/maraudes`, {...maraudefield})
    onSuccess(response)
}
*/