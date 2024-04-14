'use client'
import { SubTitle, Title } from "../text";
import BenefitsList from "./benefits";
import PlanComponents from "./planComponents";
import style from './maintenance.module.css';

export default function PriceCard({ Cards }) {

    const popUp = () => {
        alert('You have chosen the plan')
    }

    return (
        <section className={`container__p`}>
            <div className={style.card__wrapper}>
                {Cards.map(( card, index ) => (
                    <div 
                        key={index} 
                        className={style.card}
                    >
                        <Title text={card.title}/>
                        <div className={style.price__box}>
                            <span>{card.priceOne}</span>
                            <span>{card.durationOne}</span>
                        </div>
                        <div className={style.price__box}>
                            <span>{card.priceTwo}</span>
                            <span>{card.durationTwo}</span>
                        </div>
                        <div className={style.benefit__wrapper}>
                            <SubTitle text={'Benefits:'}/>
                            <BenefitsList Benefits={card.Benefits}/>
                        </div>
                        <div className={style.component__wrapper}>
                            <SubTitle text={'Components:'}/>
                            <PlanComponents planComp={card.planComp}/>
                        </div>
                        <button onClick={popUp}>
                            Choose Plan
                        </button>
                    </div> 
                ))}
            </div>
        </section>
    )
}
