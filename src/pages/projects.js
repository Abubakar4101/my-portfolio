import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimeHeading from "@/components/AnimeHeading";
import Image from "next/image";
import profilePic from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Link from "next/link";
import {motion} from "framer-motion";
import { GithubIcon, LinkArrow} from "@/components/Icons";
import TransitionPage from "@/components/TransitionPage";

const ProjectContainer = ({thumbnail, typeOfProject, title, detail, gitLink, liveLink, containerClass, isHovered}) => {
    return(
        <motion.div className=" bg-dark dark:bg-light rounded-3xl translate-x-3 translate-y-3" initial={{scale: 0}} whileInView={{scale: 1, transition: {duration: 1} }} viewport={{once: true}}>
            <motion.div className={`flex flex-col  gap-5 md:p-5 ${containerClass} border-2 border-solid border-dark dark:border-light rounded-3xl p-5 bg-light dark:bg-dark -translate-x-3 -translate-y-3`} whileHover={{transform: "translate(0rem, 0rem)"}}>
                {/*<Image src={thumbnail} alt="Abubakar" className={`rounded-3xl bg-light ${imgClass} hover:cursor-pointer`} priority={false}/>*/}
                <motion.div whileHover={{scale: 1.02}}>
                    <Image src={thumbnail} alt="Abubakar" className={`rounded-3xl h-full bg-light dark:bg-dark hover:cursor-pointer`} priority/>
                </motion.div>
                <div className="flex flex-col gap-3">
                                    <span className="text-lg text-cyan-700 dark:text-blue-400 font-medium">
                                        {typeOfProject}
                                    </span>
                    <h3 className="font-bold text-dark dark:text-light text-xl md:text-3xl">
                        {title}
                    </h3>
                    <p className="font-medium h-full whitespace-normal text-dark dark:text-light">
                        {detail}
                    </p>
                    <div className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-3">
                        <Link href={gitLink} target={"_blank"} className="btn btn-neutral dark:text-dark dark:bg-light dark:border-light w-full md:w-auto"
                              onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            GitHub
                            <GithubIcon className="w-5 h-5" />
                        </Link>
                        <Link href={liveLink} target={"_blank"} className="btn btn-accent dark:btn-primary w-full md:w-auto"
                              onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            Live
                            <LinkArrow className="dark:text-light"/>
                        </Link>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
};

const Projects = ({isHovered}) => {
    return (
        <>
            <Head>
                <title>Abubakar Siddique | Projects</title>
                <meta name="description" content="Showcase of my latest projects."/>
            </Head>
            <TransitionPage/>
            <main>
                <Layout>
                    <div className="flex justify-center items-center text-center mt-5">
                        <AnimeHeading isHovered={isHovered} text={"Imagination Trumps Knowledge!"}/>
                    </div>
                    <div className="mt-14 mb-14 flex flex-col gap-16">

                        <ProjectContainer
                            thumbnail={profilePic}
                            typeOfProject={"Featured Project"}
                            title={"Crypto Screener Application"}
                            detail={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            gitLink={"/"}
                            liveLink={"/"}
                            containerClass={"lg:flex-row"}
                            imgClass={"p-5"}
                            isHovered={isHovered}
                        />
                        <div className="flex flex-col lg:flex-row gap-16">
                            <ProjectContainer
                                thumbnail={profilePic}
                                typeOfProject={"Featured Project"}
                                title={"Crypto Screener Application"}
                                detail={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                                gitLink={"/"}
                                liveLink={"/"}
                                isHovered={isHovered}
                            />
                            <ProjectContainer
                                thumbnail={profilePic}
                                typeOfProject={"Featured Project"}
                                title={"Crypto Screener Application"}
                                detail={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                                gitLink={"/"}
                                liveLink={"/"}
                                isHovered={isHovered}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;