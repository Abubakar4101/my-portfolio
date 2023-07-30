import React from 'react';
import Layout from "@/components/Layout";

function Footer({isHovered}) {
    return (
        <footer className="w-full border-t-2 border-dark dark:border-light border-solid py-7">
            <Layout className="flex flex-col lg:flex-row justify-between items-center">
                <div className="text-[0.8em] text-dark dark:text-light font-medium sm:text-lg text-center"
                     onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                >
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </div>
                <div className="font-medium text-[0.8em] sm:text-lg flex text-dark dark:text-light  items-center gap-1 justify-center"
                     onMouseOver={() => isHovered("hovered")} onMouseLeave={() => isHovered("default")}
                >
                    Build With <span className="text-[1.2em] sm:text-2xl">&#9825;</span> by M.Abubakar
                </div>
            </Layout>
        </footer>
    );
}

export default Footer;