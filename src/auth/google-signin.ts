import 'firebase/auth';
import UserCredential = firebase.auth.UserCredential;
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: 'night-potato',
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export function isUserSignedIn(): boolean {
  return !!firebase.auth().currentUser;
}

export function signInToGoogle() {
  console.log(isUserSignedIn());

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result: UserCredential) => {
      if (result.user) {
        const userUid = result.user.uid;
        console.log(userUid);
        console.log(isUserSignedIn());
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
