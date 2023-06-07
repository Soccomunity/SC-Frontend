import { Link } from "react-router-dom";
import style from "./login.module.css";

function join(){

    return (
        <div className={style.centerDiv}>
            <div className={style.loginDiv}>
            <h1 className={style.login}>JOIN</h1>
            </div>
            <div className={style.loginDiv}>
            <input className={style.Input} type="text" placeholder="아이디를 입력해라"></input><br/>
            </div>
            <div className={style.loginDiv}>
            <input className={style.Input} type="text" placeholder="비밀번호"></input><br/>
            </div>
            <div className={style.loginDiv}>
            <input className={style.Input} type="text" placeholder="비밀번호 확인"></input><br/>
            </div>
            <div className={style.loginDiv}>
            <Link to="/login"><button className={style.loginBtn}>회원가입</button></Link>
            </div>
            
            
        </div>
    );

}
export default join;