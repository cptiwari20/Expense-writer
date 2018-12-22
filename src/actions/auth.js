import { firebase, GoogleAuthProvider } from '../firebase/firebase';

export const startSignIn = () => () => {
  return firebase.auth().signInWithPopup(GoogleAuthProvider);
};

export const startSignOut = () => () => {
  return firebase.auth().signOut();
}