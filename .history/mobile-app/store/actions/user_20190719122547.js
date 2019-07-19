import { SET_USER_LOCATION } from '../types/user';

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
