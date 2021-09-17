import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6uYioyJy8BDtLOPxW045GYIJjHBXDTRc",
  authDomain: "disneyplus-clone-6b641.firebaseapp.com",
  projectId: "disneyplus-clone-6b641",
  storageBucket: "disneyplus-clone-6b641.appspot.com",
  messagingSenderId: "892068029088",
  appId: "1:892068029088:web:f3e96d5255f821e0b89fc5",
  measurementId: "G-NPXCSNYPQ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { provider, auth, storage };

export default db;
