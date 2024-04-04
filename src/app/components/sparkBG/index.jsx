'use client'
import UseMousePosition from "./lib/useMousePosition";
import useModeState from "../navBar/Lib/modeState";
import { motion } from "framer-motion";
import Image from "next/image";
import style from  "./spark.module.css";

export default function SparkBG() {

    const { isActive } = useModeState();
    const { x, y }  = UseMousePosition();
    const size = 200;

    return (
        <div className={style.container}>
            <motion.div 
                className={style.mask}
                animate={{
                    WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                }}
                transition={{
                    type: "tween", 
                    ease: "backOut", 
                    damping: 20, 
                    stiffness: 100, 
                    mass: 0.1
                }}
            >
                <Image src={isActive ? '/bg/line-bg-dark.svg' : '/bg/line-bg-light.svg'} alt={'bg'} width={1440} height={751}/>
            </motion.div>
            <div>
                <Image src={isActive ? '/bg/r-line-bg-dark.png' : '/bg/r-line-bg-light.png'} alt={'bg'} width={1440} height={751}/>
            </div>
        </div>
    )
}
