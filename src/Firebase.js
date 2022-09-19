import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQml2Wt69CPnMED9Hc2FOsIrbs4Xj96eU",
  authDomain: "linkedin-clone-3527d.firebaseapp.com",
  projectId: "linkedin-clone-3527d",
  storageBucket: "linkedin-clone-3527d.appspot.com",
  messagingSenderId: "990001722952",
  appId: "1:990001722952:web:f211d1af96f0982919ca7d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
