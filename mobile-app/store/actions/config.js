import { FETCH_CONFIGS, FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'
import {baseUrlApi} from '../../apiUrl'
import Axios from 'axios';

export const fetchConfigs = () => {
    return async function (dispatch, getState) {
        function onSucces(response) {
            dispatch({ type: FETCH_CONFIGS, payload: response.data.configs})
        }
        function onError(error) {
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