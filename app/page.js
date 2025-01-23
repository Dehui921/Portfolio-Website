'use client'

import { useEffect, useRef, useState } from 'react';


import MainHeader from '@/components/main-header'
import MainSection from '@/components/main-section'
import AboutSection from '@/components/about-section'
import WorkSection from '@/components/work-section'
import Footer from '@/components/footer';


export default function Home() {

  const sectionRef = useRef(null); // 用於參考 section 元素
  const [workY, setWorkY] = useState(0);

  useEffect(() => {
    // 獲取 section 元素的 Y 值
    const handleSectionPosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        console.log(rect.top);
        console.log(window.scrollY);

        setWorkY(rect.top + window.scrollY); // 元素的絕對 Y 值
      }
    };

    window.scrollTo(0, 0);
    handleSectionPosition(); // 初始化時計算一次

    // 綁定 resize 事件更新 Y 值
    window.addEventListener("resize", handleSectionPosition);

    return () => {
      // 清除事件
      window.removeEventListener("resize", handleSectionPosition);
    };
  }, []);

  console.log(workY);

  return (
    <>
      <MainHeader workY={workY} />
      <MainSection />
      <AboutSection />
      <WorkSection ref={sectionRef} />
      <Footer />
      {/* <section id="work" ref={sectionRef}>work</section> */}
    </>
  );
}
