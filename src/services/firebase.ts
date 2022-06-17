import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY_SECRET,
    authDomain: process.env.AUTHDOMAIN_SECRET,
    projectId: process.env.PROJECTID_SECRET,
    storageBucket: process.env.STORAGEBUCKET_SECRET,
    messagingSenderId: process.env.MESSAGINGSENDID_SECRET,
    appId: process.env.APPID_SECRET,
    measurementId: process.env.MEASUREMENTID_SECRET,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
