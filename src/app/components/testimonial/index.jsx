import React from 'react'
import Carousel from './carousel'
import style from './testimonial.module.css'

export default function Testimonial() {
    return (
        <section className={style.wrapper}>
            <Carousel/>
        </section>
    )
}
