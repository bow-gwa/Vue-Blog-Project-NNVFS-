import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBSGb2muqBUn2wjMePH1LXwLosSQogubsA",
    authDomain: "udemy-vue-firebase-site-21e0a.firebaseapp.com",
    projectId: "udemy-vue-firebase-site-21e0a",
    storageBucket: "udemy-vue-firebase-site-21e0a.firebasestorage.app",
    messagingSenderId: "613304293244",
    appId: "1:613304293244:web:e5d13dff5b3aac7673f6f9"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }