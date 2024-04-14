import { PageTitle } from "../text";
import style from "./maintenance.module.css";

export default function Hero({ topic, subTopic }) {
    return (
        <section className={`${style.hero__wrapper} container__p`}>
            <div>
                <span>
                    {subTopic}
                </span>
                <PageTitle 
                    text={topic} 
                />
            </div>
        </section>
    )
}
