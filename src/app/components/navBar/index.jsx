'use client'
import { useRef } from "react";
import Logo from "../logo";
import HamburgerBtn from "./hamburgerBTN";
import NavMenu from "./navMenu";
import style from "./navbar.module.css"
import { useMenuState } from "./Lib/menuState";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NavBar() {
    
    const [isClose, toggleMenu] = useMenuState(false);
    const logoRef = useRef(null)
    const { scrollY } = useScroll(
        {
            target: logoRef,
            offset: ["start end", "end end"]
        }
    );
    const size = useTransform(scrollY, [0, 0.2], [1 , 0])
    
    return (
        <header className={`${style.header} container__p`}>
            <motion.div 
                style={{ scale: size}} 
                className="logo__wrapper" 
                ref={logoRef}
            >
                <Logo/>
            </motion.div>
            <div onClick={toggleMenu} className={style.menu__btn} >
                <HamburgerBtn/>
            </div>
            <NavMenu isClose={isClose} toggleMenu={toggleMenu}/>
        </header>
    )
}
