import { Body, PageTitle } from '../text'
import style from "./portfolioClient.module.css";

export default function Hero({ title, body }) {
    return (
        <section className={`${style.hero__sec} container__p`}>
            <PageTitle text={title}/>
            <Body text={body}/>
        </section>
    )
}
