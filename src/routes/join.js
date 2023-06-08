import { Link, Navigate, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import React, { useState } from "react";
import { authService } from "../firebase";
import Login from "./login";
import Menu from "../components/menu";

function Join(){
    
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)
    
      const onChange = (event) => {
        const {
          target: { name, value },
        } = event
        if (name === "email") {
          setEmail(value)
        } else if (name === "password") {
          setPassword(value)
        }
        
      }
      const checkPassword = (e) => {
        //  8 ~ 10자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        // 형식에 맞는 경우 true 리턴
        console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
    }
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
    }
    const navigate = useNavigate();
    const LoginTrue = () =>{
        
        return navigate("/");
    }

      const onSubmit = async (event) => {
        console.log(newAccount)
        
        try {
          let data
          // create account => 회원가입 화면
          data = await authService.createUserWithEmailAndPassword(email, password)
          window.alert("회원가입 성공")
          
          LoginTrue()
          console.log(data)
        } catch (error) {
          console.log(error)
          // 이메일 중복 검사
          window.alert(
            "해당 이메일은 이미 사용중 이거나 또는 사용할 수 없는 이메일 입니다."
          )
        }
      }
     
    return (
        
        <div className={style.centerDiv}>
            <Menu/>
            <div className={style.loginDiv}>
            <h1 className={style.login}>JOIN</h1>
            </div>
            <div className={style.loginDiv}>
            <input className={style.Input} onChange={onChange} type="email" name="email" placeholder="아이디를 입력해라"></input><br/>
            </div>
            <div className={style.loginDiv}>
            <input className={style.Input} onChange={onChange} type="password" name="password" placeholder="비밀번호"></input><br/>
            </div>
            <div className={style.loginDiv}>
            <button className={style.loginBtn} onClick={() => {onSubmit()}}>회원가입</button>
            </div>
            
            
        </div>
    );

}
export default Join;