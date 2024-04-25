import React from 'react'
import FlipCard from './flipCard'
import style from './about.module.css'

export default function RightFlipCard({ RightCard }) {
    return (
        <div className={style.flip__card__wrapper}>
            {RightCard.map(( card, index) => (
                <FlipCard 
                    title={card.front.title}
                    icon={card.front.icon}
                    desc={card.front.desc}
                    img={card.front.img} 
                    backTitle={card.back.backTitle}
                    Lists={card.back.Lists}
                    color={card.front.color}
                    key={index}
                />
            ))}
        </div>
    )
}
