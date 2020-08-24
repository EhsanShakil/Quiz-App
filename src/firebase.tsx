import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBv8Q4nlJHPskTvm_uAww8dtWShUbuHKzM",
  authDomain: "quiz-app-23241.firebaseapp.com",
  databaseURL: "https://quiz-app-23241.firebaseio.com",
  projectId: "quiz-app-23241",
  storageBucket: "quiz-app-23241.appspot.com",
  messagingSenderId: "623350282586",
  appId: "1:623350282586:web:dd7e3d619dc4b67117db63",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
