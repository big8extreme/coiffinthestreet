import axios from 'axios';
import { baseUrlApi } from '../../apiUrl'

import { CREATE_PARTICIPANT, ERROR_ON_CREATE_PARTICIPANT } from '../types/participant'

export function createParticipant(participantFields){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: CREATE_PARTICIPANT, payload: response.data.participants})
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