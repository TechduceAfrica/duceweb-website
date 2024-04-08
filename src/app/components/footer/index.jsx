import FooterLinks from "./footerLinks"
import Intro from "./intro"
import { quickLinkCopy } from "@/webCopy/footerContent"
import { socialMediaLinks } from "@/webCopy/navContent"
import GetInTouch from "./getInTouch"
import style from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={`container__p ${style.container}`}>
            <div>
                <Intro/>
                <div className={style.container__inner}>
                    <FooterLinks topic={`Quick Links`} Url={quickLinkCopy}/>
                    <FooterLinks topic={`Follow Us`} Url={socialMediaLinks}/>
                    <GetInTouch/>
                </div>
            </div>
            <div className="footer__divider"></div>
            <div className={style.credit}>
                <div>
                    <Link href={`/`}>
                        Terms & Conditions
                    </Link>
                    <span> | </span>
                    <Link href={`/`}>
                        Privacy Policy
                    </Link>
                </div>
                <div>
                    Copyright 2020 <Link 
                        href={`https://techduce.africa/`} 
                        title="Techduce Africa Link" 
                        target="_blank"
                        rel="noopener noreferrer">Techduce.Africa</Link> | All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
