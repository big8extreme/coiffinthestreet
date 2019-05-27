import { LOGIN, LOGOUT } from '../types/auth'

export function login(authData) {
  return {
    type: LOGIN,
    payload: authData
  }
}

export function logout() {
  return {
    type: LOGOUT,
    payload: null
  }
}