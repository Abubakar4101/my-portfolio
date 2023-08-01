'use client';
import Image from "next/image";
import thumbnail from '../../public/images/contact-thumbnail.jpg'
import AnimeHeading from "@/components/AnimeHeading";
import {motion} from "framer-motion";
import Head from "next/head";
import TransitionPage from "@/components/TransitionPage";
import React, {useEffect, useState} from "react";
import {sendMail} from "@/lib/api";

const Contact = ({isHovered}) => {
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [messageSend, setMessageSend] = useState(false);
    const [isError, setIsError] = useState(false);

    const settingValues = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setValues({
            ...values,
            [fieldName]: fieldValue
        });
    }
    const sendingMailHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            sendMail(values).then(()=>{
                setValues(initialValues)
                setMessageSend(true)
                setIsError(false)
            });
        }
        catch (error){
            setMessageSend(true)
            setIsError(true)
            setIsLoading(false);
        }

    }

    return (
        <>
            <Head>
                <title>Abubakar Siddique | Contact</title>
                <meta name="description" content="How to contact with me for exiciting collabration."/>
            </Head>
            <TransitionPage/>

            <section className="bg-light dark:bg-dark">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center">
                        {
                            messageSend ? (
                                    <motion.div id="toast-simple"
                                                className="z-50 flex items-center w-full max-w-xs p-4 space-x-4 text-light dark:text-dark bg-dark fixed  dark:bg-light divide-x divide-gray-200 rounded-lg shadow dark:divide-gray-700 space-x "
                                                role="alert"
                                                initial={{transform: "translate(-50%, 0%)", top: 0, left: '50%'}}
                                                whileInView={{transform: "translate(-50%, 0%)", top: 15, left: '50%', transition: {duration: 0.5, type: "spring", stiffness: 1000}}}
                                    >
                                        {
                                            isError ? (
                                                <>
                                                    <svg className="w-5 h-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                         viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                                                    </svg>
                                                    <div className="pl-4 text-sm font-normal">Failed to sent message.</div>
                                                </>

                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                        <path stroke="currentColor" strokeLinecap ="round" strokeLinejoin="round" strokeWidth="2"
                                                              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                                                    </svg>
                                                    <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
                                                </>
                                            )
                                        }
                                    </motion.div>

                            ): (
                                ""
                            )
                        }
                        <AnimeHeading isHovered={isHovered} text={"Get in Touch"}/>
                        <p className="mt-5 text-dark/75 font-medium dark:text-light/75"
                           onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >I&apos;m always here to chat, and I&apos;m
                            happy to help with anything you need.
                        </p>
                    </div>
                    <div className="flex flex-col gap-12 mt-10 lg:flex-row md:flex-wrap justify-center items-center">
                        <div className="flex basis-1/2 flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                               </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-bold text-dark/90 dark:text-light/90">Email</h2>
                            <p className="mt-2 text-dark/75 font-medium dark:text-light/75">I&apos;m here to help you in any
                                way I can.
                            </p>
                            <p className="mt-2 text-blue-500 dark:text-blue-400">dev.abubakarsiddique@gmail.com</p>
                        </div>
                        <div className="flex basis-1/2 flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                               </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-bold text-dark/90 dark:text-white">Location</h2>
                            <p className="mt-2 text-dark/75 font-medium dark:text-gray-400">Come say hello </p>
                            <p className="mt-2 text-blue-500 dark:text-blue-400">Near Grain Market, Sahiwal Punjab, Pk
                            </p>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                               </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-bold text-dark/90 dark:text-light/90">Phone</h2>
                            <p className="mt-2 text-dark/75 font-medium dark:text-light/75">Let&apos;s Talk</p>
                            <p className="mt-2 text-blue-500 dark:text-blue-400">+92 349 4101 609</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="p-14 flex flex-col gap-16 mb-14">
                <div className="bg-dark dark:bg-light rounded-3xl translate-x-3 translate-y-3">
                    <motion.div
                        className={`flex flex-col lg:flex-row  border-2 border-solid border-dark dark:border-light rounded-3xl bg-light dark:bg-dark -translate-x-3 -translate-y-3`}
                        whileHover={{transform: "translate(0rem, 0rem)"}}>
                        <div className={`lg:w-[45%] sm:hidden rounded-2xl lg:flex bg-dark dark:bg-light`}>
                            <Image
                                src={thumbnail}
                                alt="Abubakar"
                                className={`rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl  lg:rounded-tr-none bg-light dark:bg-dark lg:object-cover`}
                                priority
                            />
                        </div>
                        <div className="p-5 sm:p-10 lg:w-[55%]">
                            <form onSubmit={sendingMailHandler} className="space-y-4" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}>
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-dark/80 text-dark dark:text-light dark:border-light/80 p-3 text-sm bg-light dark:bg-dark dark:placeholder:text-slate-400"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={settingValues}

                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">Name</label>
                                    <input
                                        className="w-full rounded-lg border-dark/80 text-dark dark:text-light dark:border-light/80 p-3 text-sm bg-light dark:bg-dark dark:placeholder:text-slate-400"
                                        placeholder="Email"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={settingValues}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="subject">Subject</label>
                                    <input
                                        className="w-full rounded-lg border-dark/80 text-dark dark:text-light dark:border-light/80 p-3 text-sm bg-light dark:bg-dark dark:placeholder:text-slate-400"
                                        placeholder="Subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={values.subject}
                                        onChange={settingValues}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full rounded-lg border-dark/80 text-dark dark:text-light dark:border-light/80 p-3 text-sm bg-light dark:bg-dark dark:placeholder:text-slate-400"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        name="message"
                                        value={values.message}
                                        onChange={settingValues}
                                    ></textarea>
                                </div>
                                <div className="mt-4">
                                    {!values.name || !values.email || !values.subject || !values.message ? (
                                        <button className="btn bg-slate-600 dark:bg-slate-300" disabled="disabled">
                                            Send Enquiry
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 justify-center w-full rounded-lg bg-dark dark:bg-light px-5 py-3 font-medium text-light dark:text-dark sm:w-auto"
                                        >
                                            {isLoading ? <span className="loading"></span> : ""}
                                            Send Enquiry
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    );
};

export default Contact;