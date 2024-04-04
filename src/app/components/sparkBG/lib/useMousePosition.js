import { useState, useEffect } from "react";

export default function UseMousePosition () {
    const [position, setPosition] = useState({ x: 0, y:  0 });

    const updatePosition = (e)  => {
        setPosition ({x : e.clientX, y : e.clientY})
    };

    useEffect( 
        () => {
            window.addEventListener( 'mousemove', updatePosition );
            return () => {
                window.removeEventListener('mousemove', updatePosition);
            }
        },[]
    );

    return position;
};