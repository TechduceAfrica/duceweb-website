import React from 'react'
import Image from 'next/image'
import { Body, Title } from '../text'
import style from './testimonial.module.css'

export default function Single({ img, testimony, clientName, brand }) {
    return (
        <div className={style.single__wrapper}>
            <Image {...img} onError={'./imgs/Testimonial-bg.webp'}/>
            <div className={`${style.copy__wrapper} container__p`}>
                <Title text={'Testimonials'}/>
                <div className={style.single__testimony}>
                    <div>
                        <Body text={testimony}/>
                    </div>
                    <div className={style.single__metadata}>
                        <span>{clientName}</span>
                        <span>{brand}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
