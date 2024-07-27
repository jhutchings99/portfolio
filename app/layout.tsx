"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";
import Header from "./components/Header/Header";
import ReduxProvider from "./components/ReduxProvider/ReduxProvider";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Education from "./components/Education/Education";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio | Jeremy Hutchings",
//   description: "Jeremy Hutchings' software engineering portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <head>
        <title>Portfolio | Jeremy Hutchings</title>
        <meta
          name="description"
          content="Jeremy Hutchings' software engineering portfolio"
        />
      </head>
      <body className={robotoMono.className}>
        <ReduxProvider>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Navbar />
              <Cursor />
              <SocialLinks />
              <Header />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
              {children}
            </>
          )}
        </ReduxProvider>
      </body>
    </html>
  );
}
