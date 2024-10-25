import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVQ0PxPubKWWrLA18a40DQpLbPG5wH_G0",
  authDomain: "proyecto-reactcoderhouse.firebaseapp.com",
  projectId: "proyecto-reactcoderhouse",
  storageBucket: "proyecto-reactcoderhouse.appspot.com",
  messagingSenderId: "36811705977",
  appId: "1:36811705977:web:2ee4a9756f8076dc93cea8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
