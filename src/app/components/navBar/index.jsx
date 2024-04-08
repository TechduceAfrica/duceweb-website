'use client'
import Logo from "../logo";
import HamburgerBtn from "./hamburgerBTN";
import NavMenu from "./navMenu";
import style from "./navbar.module.css"
import { useMenuState } from "./Lib/menuState";

export default function NavBar() {
    const [isClose, toggleMenu] = useMenuState(false);
    return (
        <header className={`${style.header} container__p`}>
            <div className="logo__wrapper">
                <Logo/>
            </div>
            <div onClick={toggleMenu} className={style.menu__btn} >
                <HamburgerBtn/>
            </div>
            <NavMenu isClose={isClose} toggleMenu={toggleMenu}/>
        </header>
    )
}
