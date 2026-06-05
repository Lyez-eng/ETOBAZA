

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD0q0LJocKtvnEFuQ3LFesU6apuFuomJg",
  authDomain: "lyez-8b65f.firebaseapp.com",
  projectId: "lyez-8b65f",
  storageBucket: "lyez-8b65f.firebasestorage.app",
  messagingSenderId: "166299693817",
  appId: "1:166299693817:web:d6ca23471a9ae402f26828"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
