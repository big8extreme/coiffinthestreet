import { FETCH_CONFIGS, CONTACT_ADMIN, ERROR_ON_CONTACT, FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'
import { baseUrlApi } from '../../apiUrl'
import Axios from 'axios';

export const fetchConfigs = () => {
    return async function (dispatch, getState) {
        function onSucces(response) {
            dispatch({ type: FETCH_CONFIGS, payload: response.data.configs })
        }
        function onError(error) {
            // TODO MANAGE ERROR
        }
        try {
            const response = await Axios.get(`${baseUrlApi}/configs`)
            onSucces(response)
        }
        catch (err) {
            onError(err)
        }
    };
}


export function contactAdmin(fields) {
    return async (dispatch, getState) => {
        function onSuccess(response) {
            dispatch({ type: CONTACT_ADMIN })
            return { response, status: 'success' };
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_CONTACT, payload: error })
            return { error, status: 'error' };
        }

        const message = {
            ...fields,
            email: getState().auth.user.email,
            firstName: getState().auth.user.firstName,
            lastName: getState().auth.user.lastName,
        }
        try {
            const response = await Axios.post(`${baseUrlApi}/configs/contact`, { ...message }, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` }
            })
            return onSuccess(response)
        }
        catch (err) {
            return onError(err)
        }
    }
}