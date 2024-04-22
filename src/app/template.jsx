'use client'
import React from 'react'
import Loading from './_loading';

export default function Template({ children }) {

    const [loading, setLoading] = React.useState(false)
 
    React.useEffect(() => {
        setTimeout(() => setLoading(true), 5000);
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