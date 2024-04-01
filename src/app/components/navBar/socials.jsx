import Image from "next/image";
import Link from "next/link"

export default function Socials({ Menu }) {
    return (
        <>
            {Menu.map((icon, index) =>
                (
                    <Link href={icon.url} key={index} dangerouslySetInnerHTML={ {__html: icon.svg} }>
                    </Link>
                )
            )}
        </>
    )
}
