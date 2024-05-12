import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// import '@react-native-firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCSs7uNTmoUNePRd1YB8XKzZJ_DlJJzrU8',
  authDomain: 'findyourdrink-310df.firebaseapp.com',
  projectId: 'findyourdrink-310df',
  storageBucket: 'findyourdrink-310df.appspot.com',
  messagingSenderId: '810010621968',
  appId: '1:810010621968:web:bf6aaf4dfb6608f9a2b295',
  measurementId: 'G-SNPFYM0VEN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();
const firestore = getFirestore(app);
const realTimeDatabase = getDatabase();
const createAccount = async user => {
  try {
    const {user: createdUser} = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    console.log('User created:', createdUser);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('Create account failed: email already in use');
      alert('The email address is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      console.error('Create account failed: invalid email');
      alert('The email address is invalid.');
    } else if (error.code === 'auth/weak-password') {
      console.error('Create account failed: weak password');
      alert('The password must be at least 6 characters long.');
    } else {
      console.error('Create account failed:', error.message);
      alert('Create account failed.');
    }
  }
};
// Define login method
const login = async (user, successCallback, errorCallback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const loggedInUser = userCredential.user;
    successCallback(loggedInUser);
  } catch (error) {
    errorCallback(error);
  }
};

export {
  auth,
  firestore,
  createAccount,
  login,
  realTimeDatabase,
  createUserWithEmailAndPassword,
};
