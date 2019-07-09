import { FETCH_MARAUDES, FETCH_MARAUDE, CREATE_MARAUDE, UPDATE_MARAUDE, DELETE_MARAUDE } from '../types/maraude';

const initialState = {
users: []
};

export default (state = initialState , { type,payload }) =>{
switch (type) {

case FETCH_MARAUDES :
    return { ...state, maraudes: [...payload] };

default:
    return state ;
}
};