import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion'
const AnimatedCursor = ({state}) => {
    const [cursorPos, setCursorPos] = useState({
        x: 0,
        y: 0
    })
    const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const initialBackgroundColor = storedTheme === 'dark' ? "#f5f5f5"  : "#1b1b1b";
        setBackgroundColor(initialBackgroundColor);
    }, [state]);
    // const [cursorType, setCursorType] = useState("default")
    useEffect(() => {
        const mouseMove = (e) => {
            setCursorPos({
                x: e.clientX,
                y: e.clientY,
            })
        }
        window.addEventListener("mousemove", mouseMove)
    },[])


    const cursorVariant = {
        default :{
            x: cursorPos.x-15,
            y: cursorPos.y-15,
            transition:{type: "Inertia", duration: 0.09},
            backgroundColor: backgroundColor
        },
        hovered: {
            x: cursorPos.x - 15,
            y: cursorPos.y - 15,
            transition:{stiffness: 100},
            backgroundColor: backgroundColor,
            scale: 3,
            opacity: 0.3
        },
        invertedVariant:{
            x: cursorPos.x - 15,
            y: cursorPos.y - 15,
            transition:{stiffness: 100},
            scale: 3,
            backgroundColor: "#f5f5f5",
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.div className="w-7 h-7 rounded-full bg-dark fixed top-0 left-0 z-10 pointer-events-none"
                    variants={cursorVariant}
                    animate={state}
        />
    );
};

export default AnimatedCursor;