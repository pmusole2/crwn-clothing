import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCXVs1EaYX993vBUt8I4oGqWnktzQbajYk',
  authDomain: 'prince-online-store-db-98dfd.firebaseapp.com',
  databaseURL: 'https://prince-online-store-db-98dfd.firebaseio.com',
  projectId: 'prince-online-store-db-98dfd',
  storageBucket: 'prince-online-store-db-98dfd.appspot.com',
  messagingSenderId: '976848935370',
  appId: '1:976848935370:web:36cc45abef3ec63f9e1733',
  measurementId: 'G-J2GVJQYS2Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
