import Menu from "../components/menu"
import styles from "./Home.module.css"
import {Link} from "react-router-dom";
import { firestore } from '../firebase';
import { useEffect } from 'react';


function Home(){
      
      useEffect(() => {
        const post = firestore.collection("post");
        
        post.doc("post-item").get().then((doc)=>{
            console.log(doc.data());
            console.log(doc.id);
            
          })
      });
     
    return (
        <div>
            <Menu/>
            <div className={styles.listDiv}>
            <ul className={styles.list}>
            <li>
                <a className={styles.listItem}>
                <p className={styles.itemName}>제목</p>
                <span className={styles.itmeTime}>작성 시간</span>
                </a>
            </li>

            <li>
                <a className={styles.listItem}>
                <p className={styles.itemName}>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㄹㄴㅁ</p>
                <span className={styles.itmeTime}>09:00</span>
                </a>
            </li>
            

        </ul>
        
            </div>
            <Link to="/post"><button className={styles.plusBtn}>+</button></Link>
            </div>
        
    );
}

export default Home;