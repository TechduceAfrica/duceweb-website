import React from 'react'
import { Title } from '../text'
import ApproachCards from './approachCards'
import { approach } from '@/webCopy/aboutPageCopy'
import style from './about.module.css'

export default function Approach({ title} ) {
    return (
        <section className={`${style.approach__wrapper} container__p`}>
            <Title text={title}/>
            <div>
                <ApproachCards 
                    LeftCards={approach.leftCards} 
                    RightCards={approach.rightCards}
                />
            </div>
        </section>
    )
}
