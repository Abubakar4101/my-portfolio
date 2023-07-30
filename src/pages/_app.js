import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/AnimatedCursor";
import React, {useState} from "react";
import {ThemeProvider} from "next-themes";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont', })

export default function MyApp({ Component, pageProps }) {
    const [state, setState] = useState("default");
    const router = useRouter();
    const getStateFromChild = state => setState(state)
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" className="rounded-full"/>
          </Head>
          <ThemeProvider enableSystem={true} attribute="class">
              <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
                  <AnimatedCursor state={state}/>
                  <Navbar isHovered = {getStateFromChild}/>
                  <AnimatePresence mode="wait">
                    <Component key={router.asPath} isHovered = {getStateFromChild} />
                  </AnimatePresence>
                  <Footer isHovered = {getStateFromChild}/>
              </main>
          </ThemeProvider>

      </>
  )
}