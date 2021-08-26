import type firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseInstance from '../firebase/firebase-initialization';

export interface IFirebaseContext {
  logIn: () => void;
  logOut: () => void;
  deleteAccount: () => void;
  getAuthToken: () => Promise<string>;
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

  if (signedInUser) {
    return signedInUser.user;
  }
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
  const [loggingIn, setIsLoggingIn] = useState<boolean>(true);

  useEffect(() => {
    setIsLoggingIn(true);
    firebaseInstance
      .auth()
      .setPersistence('session')
      .then(async () => {
        const user = await getSignedInUser();
        setUser(user);
        setIsLoggingIn(false);
      });
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

  const deleteAccount = async () => {
    if (user) {
      await user.delete();
      await logOut();
    }
  };

  const getAuthToken = async (): Promise<string> => {
    if (user) {
      try {
        return await user.getIdToken(true);
      } catch (e) {
        console.log(e);
      }
    }
    return '';
  };

  return (
    <FirebaseContext.Provider
      value={
        {
          user: user,
          logIn: logIn,
          logOut: logOut,
          deleteAccount: deleteAccount,
          isLoggingIn: loggingIn,
          getAuthToken: getAuthToken,
        } as IFirebaseContext
      }
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const FirebaseContext = React.createContext({} as IFirebaseContext);
