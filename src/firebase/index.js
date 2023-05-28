import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7hhFz_TXfalcWoDZ-epH7Xb5ooogAy0c",
  authDomain: "online-journal-7dba7.firebaseapp.com",
  projectId: "online-journal-7dba7",
  storageBucket: "online-journal-7dba7.appspot.com",
  messagingSenderId: "984224712585",
  appId: "1:984224712585:web:42a2e3b162aa4ceb604358",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}