import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/services/AuthProvider";
import ContextProvider from "@/services/ContextProvider";
require("dotenv").config();

const manrope = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Poultry Hub",
    template: "%s | Poultry Hub ",
  },
  description:"Poultry Hub: Your one-stop shop for chickens, eggs, chicks, and feed. Join our community to become a successful poultry farmer and get innovative ideas for your poultry farm. Discover expert advice, industry news, and comprehensive guides to help you thrive in poultry farming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className}   min-h-screen p-0 m-0`}>
        <AuthProvider>
          <ContextProvider>
            <nav className=" bg-base-300 bg-opacity-80 fixed w-full z-50  top-0 shadow shadow-neutral-500">
              <Navbar></Navbar>
            </nav>
            <main className="z-30">{children}</main>
            <footer className="z-50">
              <Footer></Footer>
            </footer>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
