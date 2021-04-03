import firebase from './firebase';
import UserCredential = firebase.auth.UserCredential;

export function isUserSignedIn(): boolean {
  return !!firebase.auth().currentUser;
}

export function signInToGoogle() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  console.log('BEFORE SIGN IN', isUserSignedIn());

  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then((result: UserCredential) => {
      if (result.user) {
        const userUid = result.user.uid;
        console.log(userUid);
        console.log('AFTER SIGN IN', isUserSignedIn());
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function signOutOfGoogle() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('AFTER SIGN OUT', isUserSignedIn());
    });
}
