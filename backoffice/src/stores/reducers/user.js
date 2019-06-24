import { FETCH_USER, FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../types/user';

const initialState = {
users: []
};

export default (state = initialState , { type,payload }) =>{
switch (type) {

case FETCH_USERS :
    return { ...state, users: [...payload] };

default:
    return state ;
}
};