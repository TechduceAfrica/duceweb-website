import { gInTouchCopy } from "@/webCopy/footerContent";
import style from "./footer.module.css"

export default function GetInTouch() {
    return (
        <div className={style.touch}>
            <span>
                Get in Touch
            </span>
            <div>
                <li>
                    {gInTouchCopy.address}
                </li>
                <div>
                    <li>
                        {gInTouchCopy.mailOne}
                    </li>
                    <li>
                        {gInTouchCopy.mailTwo}
                    </li>
                </div>
                <li>
                    {gInTouchCopy.phoneNumber}
                </li>
            </div>
        </div>
    )
}
