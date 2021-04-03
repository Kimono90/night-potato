import type firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseInstance from '../firebase/firebase-initialization';
import UserCredential = firebaseInstance.auth.UserCredential;

export interface IFirebaseContext {
  // firebase: firebase.app.App;
  logIn: () => void;
  logOut: () => void;
  user: firebase.User | null;
  isLoggingIn: boolean;
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
  const [loggingIn, setIsLoggingIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggingIn(true);
    getSignedInUser().then((user) => setUser(user));
    setIsLoggingIn(false);
  }, []);

  const logIn = async () => {
    setIsLoggingIn(true);
    const currentUser = await signInToGoogle();
    setUser(currentUser);
    setIsLoggingIn(false);
  };

  const logOut = async () => {
    await signOutOfGoogle();
    setUser(null);
  };

  return (
    <FirebaseContext.Provider
      value={{ user: user, logIn: logIn, logOut: logOut, isLoggingIn: loggingIn } as IFirebaseContext}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const FirebaseContext = React.createContext({} as IFirebaseContext);
