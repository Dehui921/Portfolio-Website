import { forwardRef } from "react";

import classes from './work-section.module.css';
import shareMealImg from '@/public/sharemealproject.png'
import animationImg from '@/public/animationproject.png'

export default forwardRef(function WorkSection(props, ref) {
    return (
        <section className={classes.work} id="work" ref={ref}>
            <h2 className={classes.heading}>作品</h2>
            <div className={classes.projectsBox}>
                <div className={classes.projectCard}>
                    <img src={shareMealImg.src} alt="" />
                    <h3>Share Meal</h3>
                    <p>這是一個基於 Next.js 的單頁應用程式 (SPA)，旨在分享和探索不同的食譜，
                        透過這個專案，我進一步加深了對 Next.js 框架的理解，包括伺服器端渲染 (SSR)、靜態生成 (SSG)，
                        以及如何將現代網頁設計理念應用到實際開發中。
                    </p>
                    <div className={classes.btn}><a href="https://share-meal-mu.vercel.app/" target="_blank" rel="noopener noreferrer">Review Project</a></div>
                </div>
                <div className={classes.projectCard}>
                    <img src={animationImg.src} alt="" />
                    <h3>Challenge Yourself</h3>
                    <p>這是一個強調互動的網頁，讓使用者可以創建並挑戰自己的目標，
                        這個網頁的重點是使用了 React 和 Framer Motion，
                        結合動態設計並有良好的互動體驗。
                    </p>
                    <div className={classes.btn}><a href="https://react-animation-nine.vercel.app/" target="_blank" rel="noopener noreferrer">Review Project</a></div>
                </div>
                {/* <div className={classes.projectCard}>
                    <img src={Img.src} alt="" />
                    <h3>Project 3</h3>
                    <p>this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                    </p>
                    <div className={classes.btn}>Review Project</div>
                </div>
                <div className={classes.projectCard}>
                    <img src={Img.src} alt="" />
                    <h3>Project 4</h3>
                    <p>this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                        this is mine project!
                    </p>
                    <div className={classes.btn}>Review Project</div>
                </div> */}
            </div>

        </section>
    )

})
