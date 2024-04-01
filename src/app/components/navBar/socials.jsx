import Link from "next/link"

export default function Socials({ Menu }) {
    return (
        <>
            {Menu.map((icon, index) =>
                (
                    <Link 
                        href={icon.url}
                        title={icon.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index} 
                        dangerouslySetInnerHTML={ {__html: icon.svg} }>
                    </Link>
                )
            )}
        </>
    )
}
