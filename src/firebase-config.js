// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcX9KqLxHtVwgQGjVhRGvSbbYql3e4Wbk",
  authDomain: "soccomunity-54d04.firebaseapp.com",
  projectId: "soccomunity-54d04",
  storageBucket: "soccomunity-54d04.appspot.com",
  messagingSenderId: "986135406835",
  appId: "1:986135406835:web:26f87308aea881e5722f86",
  measurementId: "G-G3WRZ70TJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);