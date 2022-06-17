import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY_SECRET,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN_SECRET,
    projectId: process.env.NEXT_PUBLIC_PROJECTID_SECRET,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET_SECRET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDID_SECRET,
    appId: process.env.NEXT_PUBLIC_APPID_SECRET,
    measurementId: process.env.MEASUREMENTID_SECRET,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
