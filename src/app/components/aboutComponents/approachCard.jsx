import React from 'react'
import { Body, SubTitle } from '../text'
import Image from 'next/image'
import style from './about.module.css'

export default function ApproachCard({ cards }) {

    const { topic, img, body} = cards;

    return (
        <div className={style.single__card__wrapper}>
            <div className={style.bg}></div>
            <div className={style.card__top}>
                <SubTitle text={topic}/>
                <Image {...img}/>
            </div>
            <Body text={body}/>
        </div>
    )
}
