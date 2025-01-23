import classes from './footer.module.css';
import githubImg from '@/public/bxl-github.svg'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.socialIcons}>
                <a href='https://github.com/Dehui921' className={classes.a}><img className={classes.githubImg} src={githubImg.src} alt='Github Image' /></a>
            </div>
            <ul className={classes.list}>
                <li><a href='#home'>回首頁</a></li>
                <li><a href='#about'>關於我</a></li>
                <li><a href='#work'>作品</a></li>
            </ul>
        </footer>
    );
}