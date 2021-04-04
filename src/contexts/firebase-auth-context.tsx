import type firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseInstance from '../firebase/firebase-initialization';

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

async function signInToGoogle(): Promise<firebase.User | null> {
  const signedInUser = await firebaseInstance.auth().signInWithPopup(googleAuthProvider);

  if (signedInUser) return signedInUser.user;
  //TODO: error handling
  console.log('sorry, something went wrong logging you in :(');
  return null;
}

async function signOutOfGoogle() {
  try {
    await firebaseInstance.auth().signOut();
  } catch (error) {
    //TODO: error handling
    console.log('sorry, something went wrong logging you out :(');
  }
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
    const currentUser = await getSignedInUser();
    setUser(currentUser);
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
