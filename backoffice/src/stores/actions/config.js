import { FETCH_CONFIGS, FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'
import Axios from 'axios';

export const fetchConfigs = () => {
    return async function (dispatch, getState) {
        function onSucces(response) {
            dispatch({ type: FETCH_CONFIGS, payload: response.data.configs })

        }
        function onError(error) {
        }
        try {
            const response = await Axios.get(`/configs`)
            onSucces(response)
        }
        catch (err) {
            onError(err)
        }
    };

}

export const updateConfig = (configFields) => {
    return async function (dispatch, getState) {
        function onSuccess(response) {
            console.log('SUCCESS');
            dispatch({ type: UPDATE_CONFIG, payload: response.data });
        }
        function onError(error) {
            console.log(error);
        }

        try {
            const response = await Axios.put(`/configs`, {...configFields});
            onSuccess(response);
        }
        catch (err) {
            onError(err);
        }
    };
};