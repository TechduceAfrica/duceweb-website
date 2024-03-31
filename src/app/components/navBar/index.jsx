import Logo from "../logo";
import HamburgerBtn from "./hamburgerBTN";
import NavMenu from "./navMenu";
import style from "./navbar.module.css"


export default function NavBar() {
    return (
        <header className={`${style.header} container__p`}>
            <div>
                <Logo/>
            </div>
            <div>
                <HamburgerBtn/>
            </div>
            <NavMenu 
                // closeMenu={closeMenu}
            />
        </header>
    )
}
