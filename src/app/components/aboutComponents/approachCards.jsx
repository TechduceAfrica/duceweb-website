import React from 'react'
import ApproachCard from './approachCard'
import style from './about.module.css'

export default function ApproachCards({ LeftCards, RightCards }) {
    return (
        <div className={style.cards__wrapper}>
            <ApproachCardsLeft LeftCards={LeftCards}/>
            <ApproachCardsRight RightCards={RightCards}/>
        </div>
    )
}

export const ApproachCardsLeft = ({ LeftCards }) => {
    return (
        <div className={`${style.cards__wrapper__sec} ${style.left}`}>
            {LeftCards.map(( card, index ) => (
                <ApproachCard 
                    cards={card} 
                    key={index}
                />
            ))}
        </div>
    )
};

export const ApproachCardsRight = ({ RightCards }) => {
    return (
        <div className={`${style.cards__wrapper__sec} ${style.right}`}>
            {RightCards.map(( card, index ) => (
                <ApproachCard 
                    cards={card} 
                    key={index}
                />
            ))}
        </div>
    )
};