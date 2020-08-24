importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"
);

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
firebase.messaging();
