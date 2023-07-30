import React, {useState} from 'react';
import AnimeHeading from "@/components/AnimeHeading";
import {motion} from "framer-motion";
const Skill = ({text, x, y}) => {
    return(
        <motion.button className="absolute btn btn-neutral dark:bg-light dark:text-dark dark:border-light rounded-3xl top-[50%] left-[50%]"
                       initial={{transform: "translate(-50%, -50%)"}}
                       whileInView={{top: `${y}`, left:`${x}`, transition:{ease: "easeInOut", duration: 3}}}
                       viewport={{once: true}}
        >{text}</motion.button>
    )
};
const Skills = ({isHovered}) => {
    return (
            <div className="flex flex-col gap-3 md:gap-8 justify-center items-center px-8 pt-7 md:pt-8 md:px-20 lg:px-64">
                <AnimeHeading isHovered={isHovered} text={"Skills"}/>
                <div className="relative w-full h-screen rounded-full bg-circularLight dark:bg-circularDark" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                    <Skill text={"Web"} x={"50%"} y={"50%"} />
                    <Skill text={"Next js"} x={"30%"} y={"60%"} />
                    <Skill text={"React Js"} x={"75%"} y={"60%"} />
                    <Skill text={"Node Js"} x={"50%"} y={"25%"} />
                    <Skill text={"GitHub"} x={"10%"} y={"50%"} />
                    <Skill text={"HTML 5"} x={"50%"} y={"86%"} />
                    <Skill text={"CSS 3"} x={"50%"} y={"13%"} />
                    <Skill text={"Tailwind CSS"} x={"20%"} y={"13%"} />
                    <Skill text={"Bootstrap"} x={"80%"} y={"13%"} />
                    <Skill text={"JavaScript"} x={"50%"} y={"75%"} />
                    <Skill text={"MongoDB"} x={"25%"} y={"35%"} />
                    <Skill text={"Express Js"} x={"70%"} y={"35%"} />
                    <Skill text={"Java"} x={"80%"} y={"85%"} />
                </div>

            </div>
    );
};

export default Skills;