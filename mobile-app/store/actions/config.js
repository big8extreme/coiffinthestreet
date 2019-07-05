import { FETCH_CONFIGS, FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'
import {baseUrlApi} from '../../apiUrl'
import Axios from 'axios';

export const fetchConfigs = () => {
    return async function (dispatch, getState) {
        function onSucces(response) {
            console.log("ALLALALALALAL", JSON.stringify(response.data))
            dispatch({ type: FETCH_CONFIGS, payload: response.data.configs})
        }
        function onError(error) {
            console.log("ERORORORORROROROOR", JSON.stringify(error.response))
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