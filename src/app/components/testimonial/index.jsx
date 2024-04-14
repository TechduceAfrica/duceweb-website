import Image from 'next/image'
import React from 'react'
import { Body, Title } from '../text'

export default function Testimonial({ img, testimony, clientName, brand }) {
    return (
        <section>
            <Image {...img} onError={img} placeholder={blur}/>
            <Title text={'Testimonials'}/>
            <Body text={testimony}/>
            <span>{clientName}</span>
            <span>{brand}</span>
        </section>
    )
}
