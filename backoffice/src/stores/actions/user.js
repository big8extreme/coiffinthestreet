import { FETCH_USER, FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../types/user';
import axios from 'axios';


export const fetchUsers = () => {
    return async function (dispatch, getState) {
       
        function onSuccess(response) {
            dispatch({ type: FETCH_USERS, payload: response.data.user });
        }
        function onError() {

        }
        try {
            const response = await axios.get('/users');
            onSuccess(response);
        }
        catch (err) {
            onError(err);


        }

    };
};