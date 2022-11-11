// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKKJqpiWI3f487RQeEob0iW3tZQmv3QE",
  authDomain: "photo-gallery-93035.firebaseapp.com",
  projectId: "photo-gallery-93035",
  storageBucket: "photo-gallery-93035.appspot.com",
  messagingSenderId: "442362673481",
  appId: "1:442362673481:web:f7e533107ab881eabb8298"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };