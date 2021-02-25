import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1vy8NDWy24ZsErGwAv2bv4G_GD_QaihI",
  authDomain: "netflix-clone6296.firebaseapp.com",
  projectId: "netflix-clone6296",
  storageBucket: "netflix-clone6296.appspot.com",
  messagingSenderId: "1072125464258",
  appId: "1:1072125464258:web:f0fb53b2850dc2a2fc355b",
  measurementId: "G-FL6R9ZWVYY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
