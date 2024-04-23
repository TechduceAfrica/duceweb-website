import React from 'react'
import Hero from './hero'
import PriceCard from './priceCard'
import WhyChooseUs from './whyChooseUs'
import { tableData } from '@/webCopy/maintenancePageCopy'
import Testimonial from '../testimonial'

export default function MaintenanceComponents({ topic, subTopic, Cards }) {
    return (
        <>
            <Hero subTopic={subTopic} topic={topic}/>
            <PriceCard Cards={Cards} />
            <WhyChooseUs tableData={tableData}/>
            <Testimonial/>
        </>
    )
}
