import style from "./navbar.module.css"

export default function HamburgerBtn() {
    return (
        <div className={style.menu__burger}>
            <span>
                menu
            </span>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
