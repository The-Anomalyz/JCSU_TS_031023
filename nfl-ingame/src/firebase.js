/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCqBbX-JkvXpgnwRtpVzpb1xYqJqANTDBk",
    authDomain: "nfl-ingame.firebaseapp.com",
    projectId: "nfl-ingame",
    storageBucket: "nfl-ingame.appspot.com",
    messagingSenderId: "8350392980",
    appId: "1:8350392980:web:b8270916b42b7e74a1ca81"
  };

  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const storage = getStorage(firebaseApp);


export { db, auth, firebaseApp, storage};

