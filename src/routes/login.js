import { Link } from "react-router-dom";
import style from "./login.module.css";

function login(){
return (
    <div className={style.centerDiv}>
        <div className={style.loginDiv}>
        <h1 className={style.login}>LOGIN</h1>
        </div>
        <div className={style.loginDiv}>
        <input className={style.Input} type="text" placeholder="아이디를 입력해라"></input><br/>
        </div>
        <div className={style.loginDiv}>
        <input className={style.Input} type="text" placeholder="비밀번호"></input><br/>
        </div>
        <div className={style.loginDiv}>
        <Link to="/"><button className={style.loginBtn}>로그인</button></Link>
        </div>
        
        
    </div>
);
}

export default login;