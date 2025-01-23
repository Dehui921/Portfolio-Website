'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

import classes from './main-header.module.css'
import NavLink from './nav-link';
import menuImg from '@/public/bx-menu.svg'


export default function MainHeader({ workY }) {

    const [headerDisplay, setHeaderDisplay] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu((prev)=>{
            return !prev;
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            // 检查是否有类名 "header fixed"
            //const headerFixedExists = document.querySelector(".header.fixed") !== null;
            //console.log(window.scrollY);
            // 如果有类名，并且满足滚动位置和窗口宽度条件
            if (window.scrollY > 0 && window.innerWidth > 767) {
                document.body.classList.add("fixed-header-on");
                //console.log("fixed-header-on");
                setHeaderDisplay(true);//true
            } else {
                document.body.classList.remove("fixed-header-on");
                //console.log("fixed-header")
                setHeaderDisplay(false);//false
            }

            if (window.innerWidth > 767) {
                if (window.scrollY >= 0 && window.scrollY < window.innerHeight) {
                    setCurrentPage("home");
                } else if (window.scrollY >= window.innerHeight && window.scrollY < workY - 300) {
                    setCurrentPage("about");
                } else if (window.scrollY >= workY) {
                    setCurrentPage("work");
                }
            }
            //console.log(window.scrollY);
        };

        // 添加滚动事件监听器
        window.addEventListener("scroll", handleScroll);


        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [workY]);

    

    let headerClass = `${classes.header} ${headerDisplay ? classes.headerDisplay : ''} `;

    let navbarCSS = `${classes.navbar} ${menu ? classes.navActive : ''}`;

    return (
        <header className={headerClass}>
            <Link href="#home" className={classes.logo}>CHAD</Link>
            <button onClick={handleClick} className={classes.menuBtn}><img src={menuImg.src} alt="menu button"/></button>
            <nav className={navbarCSS}>
                <NavLink href="#home" active={currentPage === 'home'}>首頁</NavLink>
                <NavLink href="#about" active={currentPage === 'about'}>關於我</NavLink>
                <NavLink href="#work" active={currentPage === 'work'}>作品</NavLink>
            </nav>
        </header>
    );
}