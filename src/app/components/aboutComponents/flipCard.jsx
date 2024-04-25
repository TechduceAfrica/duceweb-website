import React from 'react'
import style from './about.module.css'
import { Body, NormalBody, SubTitle } from '../text'
import Image from 'next/image'

export default function FlipCard({ title, icon, desc, img, backTitle, Lists, color }) {

    return (
        <div className={style.flip__card}>
            <div className={style.front}>
                <div className={style.front__content}>
                    <div className={style.front__content__top}>
                        <div style={{color:`${color}`}}>
                            <SubTitle text={title}/>
                        </div>
                        <Image {...icon}/>
                    </div>
                    <div>
                        <NormalBody text={desc}/>
                    </div>
                </div>
                <div className={style.img__wrapper}>
                    <Image {...img}/>
                </div>
            </div>
            <div className={style.back}>
                <SubTitle text={backTitle}/>
                <ul>
                    <BackList Lists={Lists}/>
                </ul>
            </div>
        </div>
    )
}

export function BackList ({ Lists }) {
    return (
        <>
            {Lists.map((list, index ) => (
                <li key={index}>
                    {list.list}
                </li>
            ))}
        </>
    )}