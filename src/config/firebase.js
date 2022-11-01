import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKgOVl-cZzCGqW1hrLzKUwcYwGVfl0GSY",

  authDomain: "crisp-chat-clone.firebaseapp.com",

  projectId: "crisp-chat-clone",

  storageBucket: "crisp-chat-clone.appspot.com",

  messagingSenderId: "470440498350",

  appId: "1:470440498350:web:50f0eec0914f64fe41c93f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default firebase;
