import { Link } from "react-router-dom";
import Menu from "../components/menu"
import styles from "./post.module.css"
import { useEffect, useId, useState } from "react";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

function Post() {
  const auth = getAuth();
  const user = auth.currentUser;
  let email;
  if (user !== null) {
    email = user.email;
  }

  let totime = new Date();

  let hours = totime.getHours(); // 시
  let minutes = totime.getMinutes();  // 분
  let seconds = totime.getSeconds();  // 초
  let milliseconds = totime.getMilliseconds(); // 밀리초

  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜

  let day = `${year}-${month}-${date}`
  let time = `${year}-${month}-${date},${hours}${minutes}${seconds}${milliseconds}`
  const [newTitle, setNewTitle] = useState("");
  const [newPost, setNewPost] = useState("");


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {

    const getUsers = async () => {

      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers();
  }, [])

  const createUsers = async () => {
    await setDoc(doc(usersCollectionRef, `user${time}`), { title: newTitle, post: newPost, day: day, time: time, email: email });
    console.log(newTitle, newPost);
  }


  return (
    <div className={styles.mainDiv}>
      <div><Menu /></div>

      <div className={styles.pDiv}>
        <div>
          <div className={styles.postDiv}>
            <input className={styles.nameInput} onChange={(event) => { setNewTitle(event.target.value) }} type="text" placeholder="제목"></input>
          </div>
          <div className={styles.postDiv}>
            <textarea className={styles.postInput} onChange={(event) => { setNewPost(event.target.value) }} type="text" placeholder="글 내용"></textarea>
          </div>
          <div className={styles.postBtn}>
            <Link to="/"><button className={styles.cancel} >취소</button></Link>
            <Link to="/"><button className={styles.check} onClick={createUsers}>등록</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;