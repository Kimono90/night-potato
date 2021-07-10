import firebaseInstance from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

firebaseInstance.initializeApp(firebaseConfig);

export const firebaseProdUrl = 'https://night-potato-7add2-default-rtdb.europe-west1.firebasedatabase.app/';

export default firebaseInstance;
