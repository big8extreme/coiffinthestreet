import { FETCH_MARAUDES, ERROR_ON_MARAUDES, FETCH_MARAUDE, ERROR_ON_MARAUDE, CREATE_MARAUDE, ERROR_ON_CREATE_MARAUDE, UPDATE_MARAUDE, ERROR_ON_UPDATE_MARAUDE, DELETE_MARAUDE, ERROR_ON_DELETE_MARAUDE } from '../types/maraude'
import axios from 'axios'
import { baseUrlApi } from '../../apiUrl'


export function fetchMaraudes(params) {
    if (!params) {
        params = {};
    }
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: FETCH_MARAUDES, payload: response.data.maraudes })

        }
        function onError(error) {
            dispatch({ type: ERROR_ON_MARAUDES, payload: error })
        }
        try {
            const response = await axios.get(`${baseUrlApi}/maraudes`, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` },
                params: params
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}

export function fetchMaraudesByLoc(location = undefined) {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: FETCH_MARAUDES, payload: response.data.maraudes })

        }
        function onError(error) {
            dispatch({ type: ERROR_ON_MARAUDES, payload: error })
        }
        try {
            location = location ? location : getState().user.location
            const response = await axios.get(`${baseUrlApi}/maraudes/search`, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` },
                params: {
                    lat: location.latitude,
                    lng: location.longitude,
                    limit: 20
                }
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}

export function fetchMaraudesByCity(city) {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: FETCH_MARAUDES, payload: response.data.maraudes })
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_MARAUDES, payload: error })
        }
        try {
            const response = await axios.get(`${baseUrlApi}/maraudes`, {
                params: { city },
                headers: { Authorization: `bearer ${getState().auth.user.token}` },
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}

export function showMaraude(maraudeId) {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: FETCH_MARAUDE, payload: response.data.maraudes })
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_MARAUDE, payload: error })
        }
        try {
            const response = await axios.get(`${baseUrlApi}/maraudes/${maraudeId}`, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` }
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}

export function createMaraude(maraudeFields) {
    return async (dispatch, getState) => {
        function onSuccess(response) {
            dispatch({ type: CREATE_MARAUDE, payload: response.data.maraudes })
            return { response, status: 'success' };
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_CREATE_MARAUDE, payload: error })
            return { error, status: 'error' };
        }
        try {
            maraudeFields.userId = getState().auth.user.id
            const startDate = maraudeFields.startDate
            const startAt = maraudeFields.startAt
            const endAt = maraudeFields.endAt
            maraudeFields.startAt = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startAt.getHours(), startAt.getMinutes())
            maraudeFields.endAt = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), endAt.getHours(), endAt.getMinutes())
            delete maraudeFields.startDate


            const response = await axios.post(`${baseUrlApi}/maraudes`, { ...maraudeFields }, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` }
            })
            return onSuccess(response)
        }
        catch (err) {
            return onError(err)
        }
    }
}

export function updateMaraude(maraudeId, maraudeFields) {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: UPDATE_MARAUDE, payload: response.data.maraudes })
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_UPDATE_MARAUDE, payload: error })
        }
        try {
            const response = await axios.put(`${baseUrlApi}/maraudes`, { ...maraudeFields }, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` }
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}

export function deleteMaraude(maraudeId) {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            dispatch({ type: DELETE_MARAUDE, payload: response.data.maraudes })
        }
        function onError(error) {
            dispatch({ type: ERROR_ON_DELETE_MARAUDE, payload: error })
        }
        try {
            const response = await axios.delete(`${baseUrlApi}/maraudes/${maraudeId}`, {
                headers: { Authorization: `bearer ${getState().auth.user.token}` }
            })
            onSuccess(response)
        }
        catch (err) {
            onError(err)
        }
    }
}
