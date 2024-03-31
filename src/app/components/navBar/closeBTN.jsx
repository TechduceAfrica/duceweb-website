import style from "./navbar.module.css"

export default function CloseBTN() {
    return (
        <div className={style.close}>
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
