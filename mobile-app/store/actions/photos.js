import { FETCH_PHOTOS, FETCH_PHOTO } from '../types/photos';

export const fetchPhotos = () => {
    return{
        type: FETCH_PHOTOS,
        payload: [] 
    };
  
};