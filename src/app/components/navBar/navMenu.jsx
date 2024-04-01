import { menuLinks, socialMediaLinks } from "@/webCopy/navContent"
import Logo from "../logo"
import CloseBTN from "./closeBTN"
import MenuLinks from "./menuLinks"
import Socials from "./socials"
import style from "./navbar.module.css"
import Mode from "./mode"

export default function NavMenu({ closeMenu }) {
    return (
        <div className={`${style.menu__wrapper} container__p`}>
            <div className={style.top}>
                <Logo/>
                <CloseBTN onClick={closeMenu}/>
            </div>
            <div className={style.bottom}>
                <div className={style.menu__link}>
                    <MenuLinks Menu={menuLinks}/>
                </div>
                <div>
                    <div className={style.social}>
                        <Socials Menu={socialMediaLinks}/>
                    </div>
                    <div>
                        <Mode/>
                    </div>
                </div>
            </div>
        </div>
    )
}
