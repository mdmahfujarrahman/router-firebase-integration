import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAuibVB6x4KWyoxaJgu3y51CQUMVBCwdbQ",
    authDomain: "router-firebase-integrat-2d8f5.firebaseapp.com",
    projectId: "router-firebase-integrat-2d8f5",
    storageBucket: "router-firebase-integrat-2d8f5.appspot.com",
    messagingSenderId: "438205226936",
    appId: "1:438205226936:web:69a8bce894c72afc42b94d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;