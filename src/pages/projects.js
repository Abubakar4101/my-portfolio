'use client';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimeHeading from "@/components/AnimeHeading";
import Image from "next/image";
import formValidation from "../../public/images/projects/form-validation.jpg";
import weatherApp from "../../public/images/projects/dynamic-weather.png";
import wordpressTutorial from "../../public/images/projects/wordpress-tutorial.png";
import Link from "next/link";
import {motion} from "framer-motion";
import { GithubIcon, LinkArrow} from "@/components/Icons";
import TransitionPage from "@/components/TransitionPage";

const ProjectContainer = ({
                              thumbnail,
                              typeOfProject,
                              title,
                              detail,
                              gitLink,
                              liveLink,
                              containerClass,
                              gitBtn,
                              liveBtn,
                              typeOfLiveBtn,
                              isHovered,
                              detailPara
                        }) => {
    return(
        <motion.div className=" bg-dark dark:bg-light rounded-3xl translate-x-3 translate-y-3" initial={{scale: 0}} whileInView={{scale: 1, transition: {duration: 1} }} viewport={{once: true}}>
            <motion.div className={`flex flex-col  gap-5 md:p-5 ${containerClass} border-2 border-solid border-dark dark:border-light rounded-3xl p-5 bg-light dark:bg-dark -translate-x-3 -translate-y-3`} whileHover={{transform: "translate(0rem, 0rem)"}}>
                {/*<Image src={thumbnail} alt="Abubakar" className={`rounded-3xl bg-light ${imgClass} hover:cursor-pointer`} priority={false}/>*/}
                <motion.div whileHover={{scale: 1.02}}>
                    <Image src={thumbnail} alt="Abubakar" className={`rounded-3xl h-full bg-light dark:bg-dark hover:cursor-pointer`} priority={true}/>
                </motion.div>
                <div className="flex flex-col gap-3">
                    <span className="text-lg text-cyan-700 dark:text-blue-400 font-medium">
                        {typeOfProject}
                    </span>
                    <h3 className="font-bold text-dark dark:text-light text-xl md:text-3xl">
                        {title}<br />
                    </h3>
                    <p className={`font-medium ${detailPara}  h-full whitespace-normal text-dark dark:text-light`}>
                        {detail}
                    </p>
                    <div className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-3">
                        <Link href={gitLink} target={"_blank"} className={`btn btn-neutral ${gitBtn} dark:text-dark dark:bg-light dark:border-light w-full md:w-auto`}
                              onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            GitHub
                            <GithubIcon className="w-5 h-5" />
                        </Link>
                        <Link href={liveLink} target={"_blank"} className={`btn btn-accent ${liveBtn} dark:btn-primary w-full md:w-auto`}
                              onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            {typeOfLiveBtn}
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
                            thumbnail={weatherApp}
                            typeOfProject={"Featured Project"}
                            title={"Dynamic Weather App"}
                            detail={"A dynamic weather app provides users with a seamless and intuitive experience for accessing real-time weather data. This dynamic weather app is a web app that uses the Open Weather API to fetch real-time weather data for any location. The app is built using HTML5, CSS5, and Node JS, and it can be used to display the current weather conditions, forecast, and other weather-related information."}
                            gitLink={"https://github.com/Abubakar4101/Dynamic-Weather-App"}
                            liveLink={"/"}
                            containerClass={"lg:flex-row"}
                            gitBtn={"flex"}
                            liveBtn={"hidden"}
                            typeOfLiveBtn={"Live"}
                            isHovered={isHovered}
                        />
                        <div className="flex flex-col lg:flex-row gap-16">
                            <ProjectContainer
                                thumbnail={wordpressTutorial}
                                typeOfProject={"Video"}
                                title={"WordPress Tutorial for Beginner"}
                                gitLink={"/"}
                                liveLink={"https://www.youtube.com/watch?v=0yijB5xObKU&ab_channel=AbTechWorld"}
                                gitBtn={"hidden"}
                                liveBtn={"relative"}
                                typeOfLiveBtn={"Watch"}
                                isHovered={isHovered}
                                detailPara={"hidden"}
                            />
                            <ProjectContainer
                                thumbnail={formValidation}
                                typeOfProject={"Feature"}
                                title={"Form Validation Using JavaScript"}
                                gitLink={"https://github.com/Abubakar4101/Form-Validation-using-JS"}
                                liveLink={"/"}
                                liveBtn={"hidden"}
                                detailPara={"hidden"}
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