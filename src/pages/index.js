import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from "next/image";
import HeroPic from "../../public/images/profile/developer-pic-4.png";
import {motion} from "framer-motion";
import AnimeHeading from "@/components/AnimeHeading";
import {LinkArrow, ContactIcon} from "@/components/Icons";
import Link from "next/link";
import sectionPic from "../../public/images/bulb.png"
import TransitionPage from "@/components/TransitionPage";
import React from "react";

export default function Home({isHovered}) {
    
    const imgVariants =  {
        slide: {
            transform: "translate(0em, -3em)",
            transition: {delay: 0.5,ease: "easeInOut", duration: 1}
        },
        fade:{
            opacity: 1,
            transition: {delay: 0.5,ease: "easeInOut", duration: 1, type: "spring"}
        }
    }
    return (
        <>
            <Head>
                <title>Abubakar Siddique | Home</title>
                <meta name="description" content="Intoduction of my portfolio."/>
            </Head>
            <TransitionPage/>
            <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
                <Layout>
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <motion.div className="w-full -translate-x-full sm:hidden lg:flex" variants={imgVariants} animate="slide">
                            <Image src={HeroPic} alt="Hero Image" priority/>
                        </motion.div>
                        <div className="relative">
                            <AnimeHeading isHovered={isHovered} className="lg:text-start" text="Turning Vision Into Reality With Code And Design."/>
                            <div className="flex flex-row items-center justify-start gap-1 relative">
                                <p
                                    className="pt-3 font-medium text-center text-dark dark:text-light lg:text-start lg:basis-3/4"
                                    onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                                >
                                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                                    applications.
                                    Explore my latest projects, showcasing my expertise in React.js, Next.js and web
                                    development(Node.js, Express, MongoDB).
                                </p>
                                <motion.div className="hidden lg:flex w-48 h-64 z-10 absolute left-full -translate-x-full opacity-0 rotate-45 translate-y-10" variants={imgVariants} animate="fade">
                                    <Image src={sectionPic} alt="Section Pic" priority/>
                                </motion.div>
                            </div>

                            <div className="flex items-center justify-center pb-10 sm:pb-5 lg:justify-start mt-2 gap-2 pt-3">
                                <Link href="/resume.pdf" download={true} className="btn btn-neutral dark:bg-light dark:text-dark dark:border-light" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                                    Resume
                                    <LinkArrow className="dark:text-dark" />
                                </Link>
                                <Link href="/" className="btn btn-accent dark:btn-primary" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                                    Contact
                                    <ContactIcon className="dark:text-light"/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}
