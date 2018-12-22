import { firebase, GoogleAuthProvider } from '../firebase/firebase';

export const startAuth = () => () => {
  return firebase.auth().signInWithPopup(GoogleAuthProvider);
};