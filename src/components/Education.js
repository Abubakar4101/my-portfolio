import React, {useRef} from 'react';
import AnimeHeading from "@/components/AnimeHeading";
import {motion, useScroll} from "framer-motion";
import LiIcons from "@/components/LiIcons";

const Details = ({study, date, institute, detail, isHovered}) => {
    const ref = useRef(null)
        return <li ref={ref} className="my-8 first:mt-0 last:mb-0 m-auto flex flex-col justify-between">
            <LiIcons reference={ref}/>
            <h3 className="capitalize font-bold text-xl text-dark dark:text-light sm:text-2xl" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                {study}
            </h3>
            <span className="capitalize font-medium text-dark/60 dark:text-light/60" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                {date} | {institute}
            </span>
            <p className="font-medium w-full text-dark dark:text-light" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                {detail}
            </p>
        </li>
}

const Education = ({isHovered}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )


    return (
        <div className="flex flex-col gap-10 md:gap-14 justify-center items-center pt-7 md:pt-8 md:px-20 lg:px-64">
            <AnimeHeading isHovered={isHovered} text={"Education"}/>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div className="absolute w-[4px] bg-dark dark:bg-light h-full top-0 left-0 origin-top" style={{ scaleY: scrollYProgress }}/>
                <ul className="w-full flex flex-col justify-between items-start ml-10 mb-36 md:mb-44">
                   <Details
                       study={"Bachelor Of Science In Computer Science"}
                       date={"2020-2024"}
                       institute={"COMSATS University Islamabad, Lahore Campus"}
                       detail={"Relevant courses included Data Structures and Algorithms, OOP, Web Technologies, Computer Vision and Mobile App Development."}
                       isHovered={isHovered}
                   />
                    <Details
                        study={"Online Coursework"}
                        date={"2019-2022"}
                        institute={"Coursera, Udemy And EdX"}
                        detail={"Completed coursework in advanced topics such as CS50's, Web Development Bootcamp,Tailwind CSS, "}
                        isHovered={isHovered}
                    />

                </ul>
            </div>

        </div>
    );
};

export default Education;