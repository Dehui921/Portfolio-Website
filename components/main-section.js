'use client'

import homeImg from '@/public/homeImage.png'
import githubImg from '@/public/bxl-github.svg'

import classes from './main-section.module.css'

export default function MainSection() {
    return (
        <section className={classes.home} id="home">
            <div className={classes.content}>
                <h1 className={classes.h1}>你好 這裡是<span>CHAD</span></h1>
                <h3 className={`${classes.textanimation} ${classes.h3}`}>我是個<span className={classes.span}></span></h3>
                <p className={classes.description}>
                    我是一位具備前端開發能力的工程師，熱愛技術創新與高效解決問題。
                    未來的我會專注於開發對用戶友好、響應迅速且具有良好性能的網頁應用程式。
                </p>
                <div className="social-icons">
                    <a href='https://github.com/Dehui921' className={classes.a}><img className={classes.githubImg} src={githubImg.src} alt='Github Image' /></a>
                </div>
                <div className={classes.btngroup}>
                    {/* <a href='#' className={classes.btn1}>Hire</a> */}
                    <a href="mailto:afdi6658@gmail.com" className={classes.btn2}>聯絡我</a>
                </div>
            </div>
            {/* 放大頭貼 */}
            <div className={classes.homeimg}>
                <img className={`${classes.img} ${classes.pImg}`} src={homeImg.src} alt='Home Image' />
            </div>

        </section >
    );
}