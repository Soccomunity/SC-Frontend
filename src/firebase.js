import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcX9KqLxHtVwgQGjVhRGvSbbYql3e4Wbk",
  authDomain: "soccomunity-54d04.firebaseapp.com",
  projectId: "soccomunity-54d04",
  storageBucket: "soccomunity-54d04.appspot.com",
  messagingSenderId: "986135406835",
  appId: "1:986135406835:web:26f87308aea881e5722f86",
  measurementId: "G-G3WRZ70TJE" 
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

export const authService = firebase.auth() // 로그인 모듈
export const firebaseInstance = firebase // 소셜로그인
export const db = getFirestore(app) // DB 정보