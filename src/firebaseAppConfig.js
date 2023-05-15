import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsbyiRzp3ww_XQhyiqRAErFQe7VWUFko4",
    authDomain: "linkedin-clone-108ca.firebaseapp.com",
    projectId: "linkedin-clone-108ca",
    storageBucket: "linkedin-clone-108ca.appspot.com",
    messagingSenderId: "728215698092",
    appId: "1:728215698092:web:e9ae55bdc70d2798403d09"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
