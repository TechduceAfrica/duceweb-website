"use client"
import { useState, useEffect } from 'react';

export default function useModeState() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Check if localStorage is available
        if (typeof window !== 'undefined') {
            // Retrieve preferredMode from localStorage
            const savedMode = localStorage.getItem('preferredMode');
            setIsActive(savedMode === 'dark');
        }
    }, []);

    const toggleMode = () => {
        const newMode = !isActive ? 'dark' : 'light';
        setIsActive(!isActive);
        // Update preferredMode in localStorage
        localStorage.setItem('preferredMode', newMode);
        document.documentElement.setAttribute('data-theme', newMode);
    };

    return { isActive, toggleMode };
}