import React, {useState} from 'react';
import {motion} from "framer-motion";

const AnimeHeading = ({text, className=" ", isHovered}) => {
    const textVariants = (delay) => {
        return {
            visible: {
                opacity: 1,
                transition: {ease: "easeInOut", duration: 1, delay: delay}
            }
        };
    };
    return (
        <>
            <motion.h1
                className={`text-4xl font-bold text-center ${className} sm:text-6xl`}
            >
                {text.split(" ").map((word, index) => (
                    <motion.span className="opacity-0 text-dark dark:text-light" key={index} variants={textVariants(index / 2 )} animate="visible"  onMouseOver={() => isHovered("invertedVariant")} onMouseLeave={() => isHovered("default")}>{word} </motion.span>
                ))}
            </motion.h1>
        </>
    );
};


export default AnimeHeading;