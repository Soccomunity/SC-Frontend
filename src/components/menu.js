import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import { useEffect, useState } from "react";
import { authService } from "../firebase";


function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

    const [loggedInFlag, setLoggedInFlag] = useState(false);

    useEffect(() => {
        authService.onAuthStateChanged(user => {
            if (user) {
                setLoggedInFlag(true);

            } else {
                setLoggedInFlag(false);
            }

        })

    }, [])
    const logout = () => {
        alert("로그아웃 되었습니다.")
        authService.signOut();
    }

    const url = "https://sports.news.naver.com/wfootball/record/index?category=epl&year=2022&tab=team"
    const kurl = "https://sports.news.naver.com/kfootball/record/index"

    return (
        <div className={style.menuDiv}>
            <Link to={"/"} style={{ textDecoration: 'none' }}><span className={style.logo}> soccomunity</span></Link>
            <ul className={style.menuList}>
                <Link to={"/"} style={{ textDecoration: 'none' }}><li className={style.menu}>  홈</li></Link>
                <li className={style.menu} onClick={()=> window.open(url)} style={{cursor:'pointer'}}>  해외축구</li>
                <li className={style.menu} onClick={()=> window.open(kurl)} style={{cursor:'pointer'}}>  국내축구</li>
                <Link to={"/post"} style={{ textDecoration: 'none' }}><li className={style.menu}>  글 쓰기</li></Link>
            </ul>



            <div className={style.loginDiv}>
                <Link to={"/login"} style={{ textDecoration: 'none' }}><span hidden={loggedInFlag} className={style.loginBtn}>로그인</span></Link>
                <Link to={"/join"} style={{ textDecoration: 'none' }} ><span hidden={loggedInFlag} className={style.joinBtn}>회원가입</span></Link>
                <Link to={"/"} style={{ textDecoration: 'none' }}><span hidden={!loggedInFlag} onClick={logout} className={style.joinBtn}>로그아웃</span></Link>
                <Link to={"/myPage"} style={{ textDecoration: 'none' }}><span hidden={!loggedInFlag} className={style.joinBtn}>마이페이지</span></Link>
            </div>

        </div>


    );
}

export default Menu;