import React from 'react'
import { Body, PageTitle } from '../text'
import style from './about.module.css'

export default function Hero({ title, desc }) {
    return (
        <section className='container__p'>
            <div className={style.hero__wrapper}>
                <PageTitle text={title}/>
                <Body text={desc}/>
            </div>
        </section>
    )
}
