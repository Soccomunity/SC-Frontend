import styles from "./Home.module.css";

function Home(){
    return (
        <div>

        
        <div className={styles.logoSerch}>
            <a className={styles.logo}> Soccomunity</a>
           <input className={styles.serchInput} type="text" placeholder="글 검색"></input>
            <button className={styles.serchButton}>검색</button>

            
        </div>
        <div className={styles.menuDiv}>
        <a className={styles.menu}>게시글</a>
        <a className={styles.menu}>해외축구</a>
        <a className={styles.menu}>국내축구</a>
        
        </div>
        <hr></hr>
        </div>
    );
}

export default Home;