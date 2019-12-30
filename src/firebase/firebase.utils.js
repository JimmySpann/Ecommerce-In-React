import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGayLH5kk9uJTaVa0HVPTpt582Um7wRhU",
    authDomain: "crwn-db-27682.firebaseapp.com",
    databaseURL: "https://crwn-db-27682.firebaseio.com",
    projectId: "crwn-db-27682",
    storageBucket: "crwn-db-27682.appspot.com",
    messagingSenderId: "16108324926",
    appId: "1:16108324926:web:d858eac5376cb69855296f",
    measurementId: "G-4B0NQTL11Q"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;