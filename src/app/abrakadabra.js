import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeIZJLxwkug5yWMFCsYOJwZo_lFo5Gi7w",
  authDomain: "slack-b7173.firebaseapp.com",
  projectId: "slack-b7173",
  storageBucket: "slack-b7173.appspot.com",
  messagingSenderId: "991328509148",
  appId: "1:991328509148:web:067b99a29d35cc27af6819",
  measurementId: "G-32TG7Q6KMS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
