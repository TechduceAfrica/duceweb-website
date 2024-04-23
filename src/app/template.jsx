'use client'
import React from 'react';
import Loading from './_loading';
import Lenis from 'lenis'

export default function Template({ children }) {

    const [loading, setLoading] = React.useState(false)
 
    React.useEffect(() => {
        setTimeout(() => setLoading(true), 5000);
    }, [])

    React.useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return <>
            {loading ? (
                <>
                    {children}
                </>
            ) : (
                <Loading/>
            )}
            
        </>
}