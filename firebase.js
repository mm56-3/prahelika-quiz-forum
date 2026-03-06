// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy2BYWDIcbczywlT2UAV7BX8XAqChah88",
  authDomain: "prahelika-quiz-forum.firebaseapp.com",
  projectId: "prahelika-quiz-forum",
  storageBucket: "prahelika-quiz-forum.firebasestorage.app",
  messagingSenderId: "593115491592",
  appId: "1:593115491592:web:242cb215013a3bdab850bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database
const db = firebase.firestore();

// Authentication
const auth = firebase.auth();
