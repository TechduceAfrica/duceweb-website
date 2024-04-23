'use client'
import React from 'react'
import Single from './single'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { TestimonialsCopy } from '@/webCopy/testimonialCopy'
import '@splidejs/react-splide/css/core';

export default function Carousel() {
    const options = {
        perPage      : 1,
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : true,
        resetProgress: false,
        height       : '772px',
        breakpoints  : {
            768: {
              height : '462px',
            },
        },
    };
    
    return (
        <Splide 
            aria-label="DuceWeb Testimonial Carousel" 
            options={ options }
        >
            {TestimonialsCopy.map(( copy, index ) => (
                <SplideSlide>
                    <Single 
                        img={copy.img} 
                        testimony={copy.testimony}
                        clientName={copy.clientName}
                        brand={copy.barnd}
                        key={index} 
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
}
