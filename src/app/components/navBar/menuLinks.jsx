import Link from "next/link"

export default function MenuLinks({ Menu, toggleMenu }) {
    return (
        <>
            {Menu.map((links, index) =>
                (
                    <li key={index} onClick={toggleMenu}>
                        <Link href={links.url}>
                            {links.title}
                        </Link>  
                    </li>
                )
            )}
        </>
    )
}
