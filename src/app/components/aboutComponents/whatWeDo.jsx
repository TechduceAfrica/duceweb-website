import React from 'react'
import { Title } from '../text'
import { wwdo } from '@/webCopy/aboutPageCopy'
import LeftFlipCard from './leftFlipCard'
import RightFlipCard from './rightFlipCard'
import style from './about.module.css'

export default function WhatWeDo() {
    return (
        <section className={`${style.flip__section} container__p`}>
            <Title text={wwdo.title}/>
            <div className={style.flip__cards__parent__wrapper}>
                <LeftFlipCard LeftCard={wwdo.leftCards}/>
                <RightFlipCard RightCard={wwdo.rightCards}/>
            </div>
        </section>
    )
}
