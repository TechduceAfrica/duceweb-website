import React from 'react'
import Hero from './hero'
import Image from 'next/image'
import { Body, Title } from '../text';
import style from "./portfolioClient.module.css";
import Link from 'next/link';

export default function ClientPageComponent({ title, body, img1, challenge, img2, img3, solution, approach, result, img4, clientColor, link }) {
    return (
        <>
            <Hero title={title} body={body}/>
            <section className={style.img__bg}>
                <Image {...img1}/>
            </section>
            <div className={`${style.divider} container__p`}>
                <div></div>
            </div>
            <section className={style.challenge}>
                <div className={style.challenge__copy}>
                    <Title text={`The Challenge.`}/>
                    <ul dangerouslySetInnerHTML={{__html: challenge}}></ul>
                </div>
                <div className={style.challenge__img}>
                    <Image {...img2}/>
                </div>
            </section>
            <div className={`${style.divider} container__p`}>
                <div></div>
            </div>
            <section className={style.solution}>
                <div className={style.solution__img}>
                    <Image {...img3}/>
                </div>
                <div className={style.solution__copy}>
                    <Title text={`The Solution.`}/>
                    <ul dangerouslySetInnerHTML={{__html: solution}}></ul>
                </div>
            </section>
            <div className={`${style.goldDivider} container__p`}>
                <div style={{ backgroundColor: clientColor }}></div>
            </div>
            <section className={`${style.approach} container__p`}>
                <div>
                    <Title text={`Our Approach.`}/>
                    <div dangerouslySetInnerHTML={{__html: approach}}></div>
                </div>
            </section>
            <div className={`${style.goldDivider} container__p`}>
                <div style={{ backgroundColor: clientColor }}></div>
            </div>
            <section className={`${style.result} container__p`}>
                <div className={style.result__copy}>
                    <Title text={`The Result.`}/>
                    <Body text={result}/>
                </div>
                <div className={style.result__img}>
                    <Image {...img4}/>
                </div>
            </section>
            <section className={`${style.cta} container__p`}>
                <Link 
                    href={link} 
                    title={`${title} website link`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={style.cta__btn}
                >
                    <span>
                        VISIT WEBSITE
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M24.8889 24.8889H3.11111V3.11111H14V0H3.11111C1.38444 0 0 1.4 0 3.11111V24.8889C0 26.6 1.38444 28 3.11111 28H24.8889C26.6 28 28 26.6 28 24.8889V14H24.8889V24.8889ZM17.1111 0V3.11111H22.6956L7.40444 18.4022L9.59778 20.5956L24.8889 5.30444V10.8889H28V0H17.1111Z" fill="#E1AE25"/>
                    </svg>
                </Link>
                <div className={style.cta__divider}></div>
            </section>
        </>
    )
}
