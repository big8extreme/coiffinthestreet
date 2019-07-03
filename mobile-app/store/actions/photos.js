import { FETCH_PHOTOS } from '../types/photos';
import axios from 'axios'
import { baseUrlApi } from '../../apiUrl'


export function fetchPhotos(){
    return async function(dispatch, getState) {
        function onSuccess(response){
            dispatch({ type: FETCH_PHOTOS, payload: response.data.photos})
        }
        function onError(error){
            dispatch({ type: ERROR_ON_PHOTOS, payload: error})
        }
        try{
            const response = await axios.get(`${baseUrlApi}/maraudes`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}