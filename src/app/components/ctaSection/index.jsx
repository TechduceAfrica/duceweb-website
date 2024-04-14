import { Body, Title } from '../text'
import style from "./cta.module.css";

export default function CtaSection() {
    return (
        <section className={`${style.sec__wrapper} container__p`}>
            <div className={`${style.content__wrapper} rela z__1`}>
                <Title text={"Got a spark of inspiration?"}/>
                <Body text={'Drop us a line and let the innovation begin!'}/>
                <button>Lets chat</button>
            </div>    
        </section>
    )
}
