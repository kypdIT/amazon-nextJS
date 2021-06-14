import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIMsMD9qMyiB7496VIMSwlkc72CJIpTGU",
  authDomain: "nextjs-19860.firebaseapp.com",
  projectId: "nextjs-19860",
  storageBucket: "nextjs-19860.appspot.com",
  messagingSenderId: "697604118497",
  appId: "1:697604118497:web:8f04d829e4e3a2861ba4a0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
