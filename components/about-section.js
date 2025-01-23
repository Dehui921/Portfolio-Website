import classes from './about-section.module.css'

export default function AboutSection() {
    return (
        <section className={classes.education} id="about">
            <h2 className={classes.heading}>關於我</h2>
            <div className={classes.timelineitems}>
                <div className={classes.timelineitem}>
                    <div className={classes.timelineDot}></div>
                    <div className={classes.timelineDate}>2020~2024</div>
                    <div className={classes.timelineContent}>
                        就讀於屏東大學資訊工程學系，專注於軟體開發的學習與應用。因接觸了網頁設計課程而開始學習製作網頁。
                        在學期間，學習了HTML、CSS、JavaScript, 和前端框架如 React，具備前端開發能力。
                        除此之外，也有串接第三方 API 的經驗，曾以 ChatGPT API 為基礎開發了一個網頁塔羅牌占卜聊天機器人專題。
                    </div>
                </div>
                <div className={classes.timelineitem}>
                    <div className={classes.timelineDot}></div>
                    <div className={classes.timelineDate}>2024~</div>
                    <div className={classes.timelineContent}>
                    畢業後，我主動自學了 React，並進一步深入研究網頁設計，對於前端技術都有一定的了解。
                    學習過程中，我著重於實踐，完成了多個項目，特別是專注於使用 React 開發互動性強、響應式的網頁，並且具備將設計轉化為高效、友好的用戶體驗的能力。
                    我相信自己能在網頁開發中帶來創新與價值！
                    </div>
                </div>
            </div>
        </section>
    );
}