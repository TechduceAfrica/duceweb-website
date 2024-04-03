import { textCopy } from "@/webCopy/footerContent";
import { Light } from "../logo";
import { Body } from "../text";
import style from "./footer.module.css"

export default function Intro() {
    return (
        <div className={style.intro}>
            <Light/>
            <Body 
                text={textCopy.text}
            />
        </div>
    )
}
