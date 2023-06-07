import { Link } from "react-router-dom";
import style from "./Menu.module.css";


function menu(){
    return (
        <div>
        <div className={style.loginDiv}>
        <Link to={"/login"}><button className={style.loginBtn}>로그인</button></Link>
        <Link to={"/join"} ><button className={style.joinBtn}>회원가입</button></Link>
        </div>
        <div>

        <div className={style.logoSerch}>
        <Link to={"/"} style={{ textDecoration: 'none' }}><a className={style.logo}> Soccomunity</a></Link>
        <input className={style.serchInput} type="text" placeholder="글 검색"></input>
            <button className={style.serchButton}>검색</button>

            
        </div>
        <div className={style.menuDiv}>
        <Link to={"/"}><a className={style.menu}>게시글</a></Link>
        <Link to={"/"}><a className={style.menu}>해외축구</a></Link>
        <Link to={"/"}><a className={style.menu}>국내축구</a></Link>
        </div>
        <hr className={style.menuLine}></hr>
        </div>
        </div>
        
        
    );
}

export default menu;