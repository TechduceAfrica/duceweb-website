'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { aboutImg } from '@/webCopy/aboutPageCopy'
import { motion, useScroll, useTransform } from "framer-motion";
import style from './about.module.css'

export default function BgImage() {

    const imgRef = useRef(null)
    const { scrollY } = useScroll(
        {
            target: imgRef,
            offset: ["start end", "end start"]
        }
    );
    const scale = useTransform(scrollY, [1, 0], [1.2 , 1])

    return (
        <section className={style.about__bg__img__wrapper}>
            <motion.div 
                style={{ scale }} 
                className={style.about__bg__img} 
                ref={imgRef}
                data-scroll 
                data-scroll-speed="0.3"
            >
                <Image {...aboutImg}/>
            </motion.div>
        </section>
    )
}
