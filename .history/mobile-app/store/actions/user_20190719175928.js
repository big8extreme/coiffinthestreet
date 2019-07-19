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


export function contactAdmin(maraudeFields) {
  return async (dispatch, getState) => {
      function onSuccess(response) {
          dispatch({ type: CREATE_MARAUDE, payload: response.data.maraudes })
          return { response, status: 'success' };
      }
      function onError(error) {
          dispatch({ type: ERROR_ON_CREATE_MARAUDE, payload: error })
          return { error, status: 'error' };
      }
      try {
          maraudeFields.userId = getState().auth.user.id
          const startDate = maraudeFields.startDate
          const startAt = maraudeFields.startAt
          const endAt = maraudeFields.endAt
          maraudeFields.startAt = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startAt.getHours(), startAt.getMinutes())
          maraudeFields.endAt = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), endAt.getHours(), endAt.getMinutes())
          delete maraudeFields.startDate


          const response = await axios.post(`${baseUrlApi}/maraudes`, { ...maraudeFields }, {
              headers: { Authorization: `bearer ${getState().auth.user.token}` }
          })
          return onSuccess(response)
      }
      catch (err) {
          return onError(err)
      }
  }
}