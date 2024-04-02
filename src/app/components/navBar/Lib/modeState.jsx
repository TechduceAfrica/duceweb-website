"use client"
import { useState } from 'react'

export default function useModeState() {
    const [isActive, setIsActive] = useState(() => {
        const savedMode = localStorage.getItem('preferredMode');
        return savedMode === 'dark';
    });

    const toggleMode = () => { 
        const newMode = !isActive ? 'dark' : 'light';
        setIsActive(!isActive);
        localStorage.setItem('preferredMode', newMode);
        document.documentElement.setAttribute('data-theme', newMode);
    };

    return { isActive, toggleMode };
}