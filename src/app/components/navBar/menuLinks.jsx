import Link from "next/link"

export default function MenuLinks({ Menu }) {
    return (
        <>
            {Menu.map((links, index) =>
                (
                    <div key={index}>
                        <Link href={links.url}>
                            {links.title}
                        </Link>  
                    </div>
                )
            )}
        </>
    )
}
