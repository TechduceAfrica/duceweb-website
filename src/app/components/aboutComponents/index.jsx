import React from 'react'
import Hero from './hero'
import { approach, hero } from '@/webCopy/aboutPageCopy'
import BgImage from './bgImage'
import Approach from './approach'

export default function AboutPageComponents() {
    return (
        <>
            <Hero {...hero}/>
            <BgImage/>
            <Approach {...approach}/>
        </>
    )
}
