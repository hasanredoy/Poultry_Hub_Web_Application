import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar></Navbar>
        </nav>
        <div className=" max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
