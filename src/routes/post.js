import { Link } from "react-router-dom";
import Menu from "../components/menu"
import styles from "./post.module.css"
import { useState } from "react";

function Post(){
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const getTitle = (event) => {
        setTitle(event.target.value);
        console.log(title);    
    }
    
    const getPost = (event) => {
        setPost(event.target.value);
        console.log(post);    
    }



    return(
        <div>
        <Menu/>
        
        <div className={styles.postDiv}>
        <input className={styles.nameInput} onChange={getTitle} type="text" placeholder="닉네임"></input>
        </div>
        <div className={styles.postDiv}>
        <textarea className={styles.postInput} onChange={getPost} type="text" placeholder="글 내용"></textarea>
        </div>
        <div className={styles.postBtn}>
        <Link to="/"><button className={styles.cancel}>취소</button></Link>
        <Link to="/"><button className={styles.check}>등록</button></Link>
        </div>
        
        </div>
    );
}

export default Post;