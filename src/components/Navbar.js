import React, {useEffect, useState} from "react";
import Logo from "@/components/Logo";
import NavItems from "@/components/NavItems";
import {useRouter} from "next/router";
import Link from "next/link";
import {motion} from "framer-motion";
import {GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from "@/components/Icons";
import {useTheme} from "next-themes";

const CustomLink = ({href, title, hoveredProp}) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const linkVariants = {
        hover: {
            width: isHovered || router.asPath === href ? "100%" : "0%",
            transition: {ease: "easeInOut", duration: 0.5}
        }
    };

    return (
        <Link href={href} className="relative"
        >
            <motion.span
                className="absolute inline-block w-0 bg-light dark:bg-dark md:bg-dark dark:md:bg-light h-[2px] left-0 -bottom-0.5"
                variants={linkVariants}
                animate="hover"
            >
                &nbsp;
            </motion.span>
            <span
                onMouseEnter={() => {
                    setIsHovered(true)
                    hoveredProp("hovered")
                }}
                onMouseLeave={() => {
                    setIsHovered(false)
                    hoveredProp("default")
                }}
            >
            {title}
        </span>
        </Link>);
};
const Navbar = ({isHovered}) => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [isOpened, setIsOpened] = useState(false);
    const [menu, showMenu] = useState("hidden");
    const [mounted, setMounted] = useState(false)
    const router = useRouter();
    let showVariants = {
        show: {
            scale: isOpened ? 1 : 0,
            rotate: isOpened ? 360 : 0,
            transition: {ease: "easeInOut", duration: 0.5, type: "spring"}
        }
    };
    useEffect(() => {
        isOpened ? showMenu("flex") : showMenu("hidden")
        const handleRouteChange = (url) => {
            showMenu("hidden")
            setIsOpened(false)
        };

        router.events.on('routeChangeComplete', handleRouteChange);

    }, [isOpened, router.events]);
    useEffect(() => {
        setMounted(true)
    },[])
    const themeRenderer = () => {
        if(!mounted) return null
        let currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <motion.a className="w-5 cursor-pointer" whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}
                          onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                          onClick={() => setTheme('light')}
                >
                    <MoonIcon className="text-light dark:text-dark md:text-dark dark:md:text-light"/>
                </motion.a>
            )
        }
        else {
            return (
                <motion.a className="w-5 cursor-pointer dark:md:text-dark md:text-light" whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}
                          onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                          onClick={() => setTheme('dark')}
                >
                    <SunIcon className="text-light dark:text-dark md:text-dark dark:md:text-light"/>
                </motion.a>
            )
        }
    }
    return (
        <>
            <header className="w-full px-7 md:px-20 py-5 bg-light dark:bg-dark font-medium flex items-center justify-between">
                <Logo isHovered = {isHovered} theme={theme}/>
                <NavItems variant={showVariants} state={menu}>
                    <nav
                        className='flex flex-col md:flex-row items-center justify-between gap-3 md:gap-7 text-light dark:text-dark md:text-dark dark:md:text-light'>
                        <CustomLink href="/" title="Home" hoveredProp={isHovered}/>
                        <CustomLink href="/projects" title="Project" hoveredProp={isHovered}/>
                        <CustomLink href="/about" title="About" hoveredProp={isHovered}/>
                        <CustomLink href="/contact" title="Contact" hoveredProp={isHovered}/>
                    </nav>
                    <nav className=" flex items-center justify-between gap-3 flex-wrap ">
                        <motion.a href="#" target={"_blank"} className="w-5" whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            <GithubIcon className="text-light dark:text-dark w-full h-auto md:text-dark dark:md:text-light "/>
                        </motion.a>
                        <motion.a href="#" target={"_blank"} className="w-5" whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            <PinterestIcon/>
                        </motion.a>
                        <motion.a href="#" target={"_blank"} className="w-5" whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            <TwitterIcon/>
                        </motion.a>
                        <motion.a href="#" target={"_blank"} className="w-5" whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                        >
                            <LinkedInIcon/>
                        </motion.a>
                        {themeRenderer()}
                    </nav>
                </NavItems>
                <label className="btn btn-circle swap swap-rotate md:hidden" onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                >

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={isOpened} className="hidden" onChange={() => setIsOpened(!isOpened)}/>
                    {/* hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                    </svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 512 512">
                        <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                    </svg>

                </label>
            </header>
        </>
    );
};

export default Navbar;
