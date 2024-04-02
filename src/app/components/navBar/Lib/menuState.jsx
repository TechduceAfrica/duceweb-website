"use client"
import { useState } from "react";

export function useMenuState(initialState) {
    const [isClose, setIsClose] = useState(initialState);
    const toggleMenu = () => setIsClose(prevState => !prevState);
    return [isClose, toggleMenu];
}