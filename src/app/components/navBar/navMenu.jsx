import { motion } from "framer-motion"
import CloseBTN from "./closeBTN"
import MenuLinks from "./menuLinks"
import Socials from "./socials"
import Mode from "./mode"
import Logo from "../logo"
import { menuLinks, socialMediaLinks } from "@/webCopy/navContent"
import { menuVariant, innerTop, fadeInCenter } from "./Lib/animate"
import style from "./navbar.module.css"

export default function NavMenu({ isClose, toggleMenu }) {
    // const [isClose, toggleMenu] = useMenuState(false);
    return (
        <motion.div 
            className={`${style.menu__wrapper} container__p overflow__hidden ${isClose ? `show` : ""}`}
            variants={menuVariant}
            initial="closed"
            animate={isClose ? "open" : "closed"}
        >
            <div 
                className={style.top}
            >
                <motion.div 
                    onClick={toggleMenu}
                    variants={innerTop}
                    initial="initial"
                    animate={isClose ? "enter" : "exit"}
                    exit="exit"
                    className="logo__wrapper"
                >
                    <Logo/>
                </motion.div>
                <CloseBTN toggleMenu={toggleMenu}/>
            </div>

            <div className={style.bottom}>
                <div 
                    className={style.menu__link}
                >
                    <MenuLinks 
                        Menu={menuLinks} 
                        toggleMenu={toggleMenu}
                    />
                </div>
                <motion.div 
                    className={style.bottom__right}
                    variants={fadeInCenter}
                    initial="initial"
                    animate={isClose ? "enter" : "exit"}
                    exit="exit"
                >
                    <div className={style.social}>
                        <Socials Menu={socialMediaLinks}/>
                    </div>
                    <div>
                        <Mode/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
