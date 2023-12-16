import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";
import Header from "./components/Header/Header";
import ReduxProvider from "./components/ReduxProvider/ReduxProvider";
import SocialLinks from "./components/SocialLinks/SocialLinks";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Jeremy Hutchings",
  description: "Jeremy Hutchings' software engineering portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <ReduxProvider>
          <Navbar />
          <Cursor />
          <SocialLinks />
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
