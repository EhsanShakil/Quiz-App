import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCPtMTHJ1b58qGPbLVh84RbLhvBrupHQxY",
  authDomain: "quiz-app-6301b.firebaseapp.com",
  databaseURL: "https://quiz-app-6301b.firebaseio.com",
  projectId: "quiz-app-6301b",
  storageBucket: "quiz-app-6301b.appspot.com",
  messagingSenderId: "1048193972979",
  appId: "1:1048193972979:web:f913db4ad0e6ef791d9586",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
