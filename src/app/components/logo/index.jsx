'use client'
import React from "react";
import Image from "next/image"
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Logo() {
    const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
    return (
        <Link href={`/`} title="Go to Home">
            {isDarkMode ? <Light/> : <Dark/> }
        </Link>
    )
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
