import { FETCH_PHOTOS, FETCH_PHOTO } from '../types/photos';

const initialState = {
    photos: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_PHOTOS:
        return { ...state, photos: [...payload] }

    default:
        return state
    }
}
