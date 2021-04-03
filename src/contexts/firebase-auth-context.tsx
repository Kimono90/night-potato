import type firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseInstance from '../firebase/firebase-initialization';
import UserCredential = firebaseInstance.auth.UserCredential;

export interface IFirebaseContext {
  // firebase: firebase.app.App;
  logIn: () => void;
  logOut: () => void;
  user: firebase.User | null;
}

const googleAuthProvider = new firebaseInstance.auth.GoogleAuthProvider();

function getSignedInUser(): Promise<firebase.User | null> {
  return new Promise((resolve) => {
    firebaseInstance.auth().onAuthStateChanged((user) => {
      if (user) resolve(user);
      else resolve(null);
    });
  });
}

function signInToGoogle(): Promise<firebase.User | null> {
  return firebaseInstance
    .auth()
    .setPersistence(firebaseInstance.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebaseInstance
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then((result: UserCredential) => {
          if (result.user) {
            return result.user;
          }
          return null;
        })
        .catch((error) => {
          console.log(error);
          return null;
        });
    });
}

function signOutOfGoogle() {
  firebaseInstance
    .auth()
    .signOut()
    .then(() => {});
}

export const FirebaseProvider = ({ children }: any) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    getSignedInUser().then((user) => setUser(user));
  }, []);

  const logIn = async () => {
    const currentUser = await signInToGoogle();
    setUser(currentUser);
  };

  const logOut = async () => {
    await signOutOfGoogle();
    setUser(null);
  };

  return (
    <div>
      <FirebaseContext.Provider value={{ user: user, logIn: logIn, logOut: logOut } as IFirebaseContext}>
        {children}
      </FirebaseContext.Provider>
    </div>
  );
};

export const FirebaseContext = React.createContext({} as IFirebaseContext);
