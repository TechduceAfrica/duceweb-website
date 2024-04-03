'use client'
import useModeState from "../navBar/Lib/modeState";
import Image from "next/image"
import Link from "next/link";

export default function Logo() {

    const { isActive } = useModeState();
    return (
        <Link href={`/`} title="Go to Home">
            {isActive ? <Light /> : <Dark />}
        </Link>
    );
}

export function Light () {
    return (
        <Image 
            src="/duceweb-white_logo.webp"
            alt="Duceweb-logo" 
            title="Duceweb-logo"
            height={40.44} 
            width={253} 
            priority={true}
            className="logo"
        />
    )
}

export function Dark () {
    return (
        <Image 
            src="/duceweb-black_logo.webp"
            alt="Duceweb-logo" 
            title="Duceweb-logo"
            height={40.44} 
            width={253} 
            priority={true}
            className="logo"
        />
    )
}
