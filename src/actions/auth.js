import { firebase, googleAuthProvider } from '../firebase/firebase';

export function login(uid) {
  return {
    type: 'LOGIN',
    uid
  };
}

export function startLogin() {
  return async (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  };
}

export function startLogout() {
  return async (dispatch) => {
    firebase.auth().signOut();
  }
}