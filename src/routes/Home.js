import { useEffect, useId, useState } from "react";
import Menu from "../components/menu"
import { authService } from "../firebase";
import styles from "./Home.module.css"
import {Link} from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";


function Home(){

    

    const [users, setUsers] = useState([]);
    // db의 users 컬렉션을 가져옴
    const usersCollectionRef = collection(db, "users");
    
     // 시작될때 한번만 실행
     useEffect(()=>{
        // 비동기로 데이터 받을준비
      const getUsers = async () => {
       // getDocs로 컬렉션안에 데이터 가져오기
        const data = await getDocs(query(usersCollectionRef, orderBy("time", "desc")));
        // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
        
      }
  
      getUsers();
    },[])
    const [loggedInFlag,setLoggedInFlag] = useState(false);
    useEffect(()=>{
        authService.onAuthStateChanged (user=>{
            if(user){
                setLoggedInFlag(true);
                
              } else {
                setLoggedInFlag(false);
              }
              
        })
        console.log(loggedInFlag);
    },[])
  

    const showUsers = users.map((value)=> (
           <li key={value.time}>
                <div className={styles.item}>
                    <span className={styles.itemName}>{value.title}</span>
                <div className={styles.postValue}>
                <span>{value.post}</span>
                </div>
                <div className={styles.listItem}>
                <span className={styles.itemEmail}>{value.email}</span>
                <span className={styles.itmeTime}>{value.day}</span>
                </div>
                </div>
            </li>
            ))

    return (
        <div className={styles.homeDiv}>
            <div><Menu/></div>
            
            <div className={styles.listDiv}>
            <ul className={styles.list}>
            {showUsers}
        </ul>
        
            </div>
            <Link to="/post"><button hidden={!loggedInFlag} className={styles.plusBtn}>+</button></Link>
            </div>
           
            
        
    );
}

export default Home;