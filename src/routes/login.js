import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { useCallback, useState } from "react";
import { authService } from "../firebase";
import Menu from "../components/menu";


function Login(){

const [ID, setID] = useState("")
const [PW, setPW] = useState("")

const IDOnChange = useCallback((e) => {
    setID(e.target.value)
}, [])

const PASSOnChange = useCallback((e) => {
  setPW(e.target.value)
}, [])

const navigate = useNavigate();
    const LoginTrue = () =>{
        
        return navigate("/");
    }

const onSubmit = async (event) => {
    
    try {
        
      let data
      // login => 로그인 화면
      data = await authService.signInWithEmailAndPassword(ID, PW)
      window.alert("로그인 성공")
      LoginTrue();
      console.log(data)
    } catch (error) {
      console.log(error)
      window.alert("이메일과 비밀번호를 다시 확인해주세요")
    }
  }


return (
    <div className={style.centerDiv}>
        <Menu/>
        <div className={style.loginDiv}>
        <h1 className={style.login}>LOGIN</h1>
        </div>
        <div className={style.loginDiv}>
        <input className={style.Input} onChange={IDOnChange} type="text" name="userId" placeholder="아이디를 입력해라"></input><br/>
        </div>
        <div className={style.loginDiv}>
        <input className={style.Input} onChange={PASSOnChange} type="password" name="userPW" placeholder="비밀번호"></input><br/>
        </div>
        <div className={style.loginDiv}>
       <button className={style.loginBtn} onClick={onSubmit}>로그인</button>
        </div>
        
        
    </div>
);
}

export default Login;