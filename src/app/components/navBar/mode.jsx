'use client'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { modeAni, transitionValues } from './Lib/animate'
import useModeState from './Lib/modeState'
import style from "./navbar.module.css"

export default function Mode() {

    const { isActive, toggleMode } = useModeState();

    useEffect(() => {
        const savedMode = localStorage.getItem('preferredMode');
        if (savedMode) {
            document.documentElement.setAttribute('data-theme', savedMode);
        }
    }, []);

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
