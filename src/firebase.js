//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDcX9KqLxHtVwgQGjVhRGvSbbYql3e4Wbk",
  authDomain: "soccomunity-54d04.firebaseapp.com",
  projectId: "soccomunity-54d04",
  storageBucket: "soccomunity-54d04.appspot.com",
  messagingSenderId: "986135406835",
  appId: "1:986135406835:web:26f87308aea881e5722f86",
  measurementId: "G-G3WRZ70TJE"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };