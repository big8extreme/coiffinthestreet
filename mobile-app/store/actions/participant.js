import axios from 'axios';
import { baseUrlApi } from '../../apiUrl'

import { FETCH_PARTICIPANTS, ERROR_ON_PARTICIPANTS, FETCH_PARTICIPANT, ERROR_ON_PARTICIPANT, CREATE_PARTICIPANT, ERROR_ON_CREATE_PARTICIPANT } from '../types/participant'

export function fetchParticipants(){
    return async function(dispatch, getState) {
        function onSuccess(response){
            console.log('succesfetch : ' + response.data.participants)
            dispatch({ type: FETCH_PARTICIPANTS, payload: response.data.participants})
        }
        function onError(error){
            console.log('error : ' + error)

            dispatch({ type: ERROR_ON_PARTICIPANTS, payload: error})
        }
        try{
            const response = await axios.get(`${baseUrlApi}/participants/`,{
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function showParticipant(participantId){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: FETCH_PARTICIPANT, payload: response.data.participants})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_PARTICIPANT, payload: error})
        }
        try{
            const response = await axios.post(`${baseUrlApi}/participants/${ participantId }`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}

export function createParticipant(participantFields){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: CREATE_PARTICIPANT, payload: response.data.participant})

                // return {status: 'success', participant: response.data.participant}

        }
        function onError(error){
            dispatch({ type: ERROR_ON_CREATE_PARTICIPANT, payload: error})
        }
        try{
            const response = await axios.post(`${baseUrlApi}/participants/`, { ...participantFields }, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}