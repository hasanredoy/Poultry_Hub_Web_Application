import { Manrope, Roboto, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const manrope = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html  lang="en">
      <body className={`${manrope.className}  min-h-screen p-0 m-0`}>
        <nav className=" bg-base-300 bg-opacity-80 fixed w-full z-50  top-0 shadow-sm shadow-base-200">
          <Navbar></Navbar>
        </nav>
        <div className="mt-[72px] ">
        {children}
        </div>
      </body>
    </html>
  );
}
