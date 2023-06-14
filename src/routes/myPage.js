import { getAuth } from "firebase/auth";
import Menu from "../components/menu";
import style from "./myPage.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { authService, db } from "../firebase";

function MyPage() {

    let email;
    const [users, setUsers] = useState([]);


    // 시작될때 한번만 실행
    useEffect(() => {
        // 비동기로 데이터 받을준비
        const getUsers = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user !== null) {
                email = user.email;
            }

            const usersCollectionRef = query(collection(db, "users"), where("email", "==", `${email}`));

            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }
        getUsers();
    }, [])

    const logout = () => {
        alert("로그아웃 되었습니다.")
        authService.signOut();
    }

    const showUsers = users.map((value) => (
        <li key={value.time}>
            <a className={style.listItem}>
                <p className={style.itemName}>{value.title}</p>
                <span className={style.itmeTime}>{value.day}</span>
            </a>
        </li>
    ))

    return (
        <div className={style.myDiv}>
            <div><Menu /></div>

            <div className={style.myPageDiv}>

                <h3>내 글</h3>
                <ul className={style.list}>
                    <li>
                        <a className={style.listItem}>
                            <p className={style.itemName}>제목</p>
                            <span className={style.itmeTime}>작성일</span>
                        </a>
                    </li>
                    {showUsers}
                </ul>
            </div>

        </div>);
}

export default MyPage;