import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
apiKey: "AIzaSyCy2BYWDIcbczywlT2UAV7BX8XAqChah88",
authDomain: "prahelika-quiz-forum.firebaseapp.com",
projectId: "prahelika-quiz-forum",
storageBucket: "prahelika-quiz-forum.appspot.com",
messagingSenderId: "593115491592",
appId: "1:593115491592:web:242cb215013a3bdab850bd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
