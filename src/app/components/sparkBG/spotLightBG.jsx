'use client'
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./spark.module.css";

export default function SpotLightBG() {
    const bgRef = useRef(null);

    const [left, setLeft] = useState("50%");
    const [top, setTop] = useState("50%");

    const curX = `${left}%`;
    const curY = `${top}%`;

    useEffect(() => {
        const updatePosition = (e) => {
            const { width, height } = bgRef.current.getBoundingClientRect();
            const x = e.offsetX;
            const y = e.offsetY;

            const newLeft = `${(x / width) * 100}`;
            const newTop = `${(y / height) * 100}`;

            setLeft(newLeft);
            setTop(newTop);
        };

        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <div className={style.container} ref={bgRef}>
            <motion.div 
                className={style.mask}
                animate={{
                    WebkitMaskPosition: `${curX} ${curY}`,
                }}
                transition={{ 
                    type: "tween", 
                    delay: 0, 
                    ease: "backOut", 
                    duration: 0.5,
                    damping: 20, 
                    stiffness: 100, 
                    mass: 0.1
                }}
            >
                <div></div>
            </motion.div>
            <div className={style.bg}></div>
        </div>
    );
}