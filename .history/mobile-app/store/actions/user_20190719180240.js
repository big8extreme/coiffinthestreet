import { SET_USER_LOCATION, CONTACT_ADMIN, ERROR_ON_CONTACT  } from '../types/user';

export function setUserLocation(location) {
  return {
    type: SET_USER_LOCATION,
    payload: {
      latitude: location.latitude,
      latitudeDelta: location.latitudeDelta,
      longitude: location.longitude,
      longitudeDelta: location.longitudeDelta
    }
  }
}


export function contactAdmin(fields) {
  return async (dispatch, getState) => {
      function onSuccess(response) {
          dispatch({ type: CONTACT_ADMIN })
          return { response, status: 'success' };
      }
      function onError(error) {
          dispatch({ type: ERROR_ON_CONTACT, payload: error })
          return { error, status: 'error' };
      }
      try {
          const response = await axios.post(`${baseUrlApi}/maraudes`, { ...fields }, {
              headers: { Authorization: `bearer ${getState().auth.user.token}` }
          })
          return onSuccess(response)
      }
      catch (err) {
          return onError(err)
      }
  }
}