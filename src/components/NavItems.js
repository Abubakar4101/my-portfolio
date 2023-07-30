import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

const NavItems = ({children, state, variant}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 768) {
                    setIsMobile(true);
                } else {
                    setIsMobile(false);
                }
            };
            // Call handleResize initially to set the initial screen size
            handleResize();

            // Add event listener to window for resize
            window.addEventListener("resize", handleResize);

    }, []);

    return (
        <>
            {isMobile ? (
                <motion.div
                    className={`${state} flex-col items-center justify-center gap-8 bg-dark dark:bg-light opacity-90 w-[75%] h-[65%] p-10 rounded-3xl fixed z-10 top-[50%] left-[50%] `}
                    initial={{ rotate: 0, y: "-50%", x: "-50%" }}
                    variants={variant}
                    animate="show"
                >
                    {children}
                </motion.div>
            ) : (
                children
            )}
        </>


    )

};

export default NavItems;