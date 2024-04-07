import Image from 'next/image'
import { Body } from '../text'
import style from "./portfolioComponent.module.css"
import Link from 'next/link'

export default function SinglePortfolio({ Elements }) {
    return (
        <div className={style.container}>
            {Elements.map((element, index ) => 
                (
                    <Link 
                        key={index} 
                        href={element.link} 
                        className={style.el}>
                        <div className={style.wrapper}>
                            <Image {...element}/>
                        </div>
                        <div>
                            <Body text={element.client}/>
                        </div>
                    </Link>
                )
            )}
        </div>
    )
}
