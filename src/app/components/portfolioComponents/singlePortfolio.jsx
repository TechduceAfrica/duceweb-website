import React from 'react'
import { Body } from '../text'

export default function SinglePortfolio({ singleProject, text}) {
    return (
        <div>
            <div>
                <Image {...singleProject}/>
            </div>
            <div>
                <Body text={text}/>
            </div>
        </div>
    )
}
