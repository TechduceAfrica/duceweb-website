import SpotLightBG from "../components/sparkBG/spotLightBG";
import { PageTitle } from "../components/text";
import SinglePortfolio from "../components/portfolioComponents/singlePortfolio";
import { mainPage } from "@/webCopy/portfolioContent";
import CtaSection from "../components/ctaSection";


export default function PortfolioPage() {
    return (
        <main>
            <section className="hero__sec no__pe">
                <PageTitle text={mainPage.title}/>
            </section>
            <section>
                <SinglePortfolio Elements={mainPage.elements}/>
            </section>
            <CtaSection/>
            <SpotLightBG/>
        </main>
    )
}
