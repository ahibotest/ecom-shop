import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYcfBOw3upax9SSV_0Ho148QT-55TrqW4",
  authDomain: "ecom-test-61fc1.firebaseapp.com",
  databaseURL: "https://ecom-test-61fc1.firebaseio.com",
  projectId: "ecom-test-61fc1",
  storageBucket: "ecom-test-61fc1.appspot.com",
  messagingSenderId: "662690549399",
  appId: "1:662690549399:web:c85a62cedabc02dfe923d2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialising the Storage Service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
