import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDoZ7_IW4g8FMeTnvDO4W_KrCpvI9sTOWw",
    authDomain: "portifolioapp-d5f03.firebaseapp.com",
    projectId: "portifolioapp-d5f03",
    storageBucket: "portifolioapp-d5f03.appspot.com",
    messagingSenderId: "851782185438",
    appId: "1:851782185438:web:7ebfcc88b211296029ed4f"
});

const db = firebase.firestore();

export { db };

