import style from "./navbar.module.css"

export default function CloseBTN({  toggleMenu }) {
    return (
        <div className={style.close} onClick={toggleMenu}>
            <span>
                close
            </span>
            <div className={style.icon}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
