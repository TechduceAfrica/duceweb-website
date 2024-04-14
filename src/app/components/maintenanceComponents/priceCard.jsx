'use client'
import { SubTitle, Title } from "../text";
import BenefitsList from "./benefits";
import PlanComponents from "./planComponents";


export default function PriceCard({ Cards }) {

    const popUp = () => {
        alert('You have chosen the plan')
    }

    return (
        <section>
            {Cards.map(( card, index ) => {
                <div key={index}>
                    <Title text={card.title}/>
                    <span>{card.priceOne}</span>
                    <span>{card.durationOne}</span>
                    <span>{card.priceTwo}</span>
                    <span>{card.durationTwo}</span>
                    <div>
                        <SubTitle text={'Benefits:'}/>
                        <BenefitsList Benefits={card.Benefits}/>
                    </div>
                    <PlanComponents planComp={card.planComp}/>
                    <button onClick={popUp}>
                        Choose Plan
                    </button>
                </div> 
            })}
        </section>
    )
}
