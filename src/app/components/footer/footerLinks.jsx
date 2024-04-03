import Link from "next/link";
import style from "./footer.module.css"

export default function FooterLinks({ topic, Url}) {
    return (
        <div className={style.link__wrapper}>
            <span>
                {topic}
            </span>
            <div className={style.links}>
                {Url.map(( link, index ) => (
                    <Link 
                        key={index} 
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li>
                            {link.title}
                        </li>
                    </Link>
                ))}
            </div>
        </div>
    )
}
