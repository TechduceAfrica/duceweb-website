import React from 'react'
import FlipCard from './flipCard'
import style from './about.module.css'

export default function LeftFlipCard({ LeftCard }) {
    return (
        <div className={style.flip__card__wrapper}>
            {LeftCard.map(( card, index) => (
                <FlipCard 
                    title={card.front.title}
                    icon={card.front.icon}
                    desc={card.front.desc}
                    img={card.front.img} 
                    color={card.front.color}
                    backTitle={card.back.backTitle}
                    Lists={card.back.Lists}
                    key={index}
                />
            ))}
        </div>
    )
}
