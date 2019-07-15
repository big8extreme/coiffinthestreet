import axios from 'axios';
import { baseUrlApi } from '../../apiUrl'
import { ERROR_ON_PICTURES, UPLOAD_PICTURES } from '../types/pictures';


export function UploadPictures(pictures) {

    return async dispatch => {

        function onSuccess(response) {

            // set token as default header
            axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
            // data.pictures ?
            dispatch({ type: UPLOAD_PICTURES, payload: response.data });

            return { response, status: 'success' };

        }

        function onError(error) {

            dispatch({ type: ERROR_ON_PICTURES, error });

            return { error, status: 'error' };

        }

        try {
            const splitedpicturesUrl = user.pictures.uri.split('/')
            const originalFileName = splitedpicturesUrl[splitedpicturesUrl.length - 1]
            let originalFileExt = originalFileName.split('.')
            originalFileExt = originalFileExt[originalFileExt.length - 1]
            const formData = new FormData();
            user.pictures.forEach(function (formData) {
                formData.append('pictures', {
                    uri: user.pictures.uri,
                    name: originalFileName,
                    type: `image/${originalFileExt}`
                }, user.pictures.name)
            });


            // !!  route is it ok ?  !!
            const response = await axios.put(`${baseUrlApi}/:id(\\d+)/pictures`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                }
            });

            return onSuccess(response);

        }

        catch (err) {

            return onError(err);

        }

    };

};
