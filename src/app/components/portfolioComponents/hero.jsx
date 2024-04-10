import React from 'react'
import { Body, PageTitle } from '../text'

export default function Hero({ title, body }) {
    return (
        <section>
            <PageTitle text={title}/>
            <Body text={body}/>
        </section>
    )
}
