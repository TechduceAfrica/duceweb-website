import { gInTouchCopy } from "@/webCopy/footerContent";
import style from "./footer.module.css"
import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className={style.touch}>
            <span>
                Get in Touch
            </span>
            <div>
                <Link 
                    href={gInTouchCopy.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li>
                        {gInTouchCopy.address}
                    </li>
                </Link>
                <div>
                    <Link 
                        href={gInTouchCopy.mailOneLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li>
                            {gInTouchCopy.mailOne}
                        </li>
                    </Link>
                    <Link 
                        href={gInTouchCopy.mailTwoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li>
                            {gInTouchCopy.mailTwo}
                        </li>
                    </Link>
                </div>
                <Link 
                    href={gInTouchCopy.phoneNumberLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li>
                        {gInTouchCopy.phoneNumber}
                    </li>
                </Link>
            </div>
        </div>
    )
}
