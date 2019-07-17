import axios from 'axios';
import { baseUrlApi } from '../../apiUrl'
import { ERROR_ON_PICTURES, UPLOAD_PICTURES } from '../types/pictures';


export function uploadPictures(maraudeId, pictures) {

    return async function (dispatch, getState) {

        function onSuccess(response) {
            dispatch({ type: UPLOAD_PICTURES, payload: response.data.photos });

            return { response, status: 'success' };

        }

        function onError(error) {
            console.log("ERROR", error)
            dispatch({ type: ERROR_ON_PICTURES, error });

            return { error, status: 'error' };

        }

        try {
            console.log('Preparing', pictures)
            const splitedpicturesUrl = pictures.uri.split('/')
            const originalFileName = splitedpicturesUrl[splitedpicturesUrl.length - 1]
            let originalFileExt = originalFileName.split('.')
            originalFileExt = originalFileExt[originalFileExt.length - 1]
            const formData = new FormData();
            formData.append('pictures', {
                uri: pictures.uri,
                name: originalFileName,
                type: `image/${originalFileExt}`
            }, originalFileName);
            //need maraude ID
            console.log('formData : ', formData)
            // route is it ok ? 
            const response = await axios.put(`${baseUrlApi}/maraudes/${maraudeId}/pictures`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json',
                    "Authorization": `bearer ${getState().auth.user.token}`

                }
            });

            return onSuccess(response);

        }

        catch (err) {

            return onError(err);

        }

    };

};
