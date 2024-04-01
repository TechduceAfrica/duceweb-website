'use client'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { modeAni, transitionValues } from './animate'
import style from "./navbar.module.css"

export default function Mode() {

    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const savedMode = localStorage.getItem('preferredMode');
        if (savedMode) {
            setIsActive(savedMode === 'dark');
        }
    }, []);

    const toggleMode = () => { 
        const newMode = !isActive ? 'dark' : 'light';
        setIsActive(!isActive);
        localStorage.setItem('preferredMode', newMode);
        console.log('click');
        document.documentElement.setAttribute('data-theme', newMode);
    };

    return (
        <div className={style.mode}>
            <span 
                className={!isActive ? 'not__active' : ''}
            >
                Dark
            </span>
            <div 
                className={style.checkbox} 
                onClick={toggleMode}
            >
                <motion.div 
                    className={style.circle}
                    animate={isActive ? modeAni.dark : modeAni.light}
                    transition={transitionValues}
                >
                </motion.div>
            </div>
            <span 
                className={isActive ? 'not__active' : ''}
            >
                Light
            </span>
        </div>
    )
}
