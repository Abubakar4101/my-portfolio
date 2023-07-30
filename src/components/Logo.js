import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = ({isHovered}) => {

    return (
        <>
            <div className="relative flex items-center justify-center mb-2">
                <div className="absolute bg-dark dark:bg-light blur rounded-full w-full h-full"/>
                <MotionLink href='/' className={`w-16 z-10 h-16 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center rounded-full text-2xl font-bold`}
                            whileHover={{
                                rotate: [0, 90, 180, 270, 360],
                                transition: {duration: 1}
                            }}
                            onMouseOver={() => {
                                isHovered("hovered")
                            }}
                            onMouseLeave={() => {
                            isHovered("default")
                        }}
                >
                    A.B
                </MotionLink>

            </div>
        </>

    );
};

export default Logo;