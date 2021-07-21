import firebaseInstance from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

firebaseInstance.initializeApp(firebaseConfig);

export default firebaseInstance;
