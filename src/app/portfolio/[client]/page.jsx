import React from 'react'
import { redirect } from "next/navigation";
import { PortfolioClient } from '@/webCopy/portfolioContent';
import ClientPageComponent from '@/app/components/portfolioComponents/clientPage';
import CtaSection from '@/app/components/ctaSection';
import SpotLightBG from '@/app/components/sparkBG/spotLightBG';

export default function ClientPage({ params }) {
    
    const client = PortfolioClient.find(
        (client) => client.slug === `/portfolio/${params.client}`
    );

    if (!client) {
        redirect ("/not-found");
    }

    return (
        <main className='portfolio__works__page'>
            <ClientPageComponent
                title={client.client}
                body={client.desc} 
                img1={client.img1} 
                challenge={client.challenge} 
                img2={client.img2} 
                img3={client.img3} 
                solution={client.solution} 
                approach={client.approach} 
                result={client.result} 
                img4={client.img4}
                clientColor={client.clientColor}
                link={client.link}
            />
            <CtaSection/>
            <SpotLightBG/>
        </main>
    )
}
