import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseapp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

const db = firebase.firestore();

export { db };

