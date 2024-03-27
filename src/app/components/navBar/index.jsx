import Image from "next/image";
import Logo from "../logo";
import HamburgerBtn from "./hamburgerBTN";


export default function NavBar() {
    return (
        <header>
            <div>
                <Logo/>
            </div>
            <div>
                <HamburgerBtn/>
            </div>
        </header>
    )
}
