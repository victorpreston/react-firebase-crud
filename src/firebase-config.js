import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9hjHc1LOnKrdy_hsc39vROWXNTrxNarM",
    authDomain: "react-firebase-3e9ca.firebaseapp.com",
    projectId: "react-firebase-3e9ca",
    storageBucket: "react-firebase-3e9ca.appspot.com",
    messagingSenderId: "831319398799",
    appId: "1:831319398799:web:f154223d2003ba1be213fa",
    measurementId: "G-WFLP549MJ4"
  };


  const app =initializeApp(firebaseConfig);

  export const db = getFirestore(app)