'use client'
import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";
import logo from '../favicon.ico'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
export default function DashboardLayout({ children }) {
    // state for theme 
    const [theme , setTheme]=useState('light')

    //check local storage and set the local storage value in theme state
    useEffect(()=>{
      const currentTheme= localStorage.getItem('theme') 
      if(currentTheme){
      setTheme(currentTheme)
      document.documentElement.setAttribute('data-theme',currentTheme)
      }
    },[])
      // get theme from use theme hook
    //toggle theme 
    const toggleTheme = ()=>{
      // make new theme opposite of default value of theme state 
      const newTheme= theme ==="light"?"dark":"light"
      // then set newTheme in theme state 
      setTheme(newTheme)
      // set newTheme as data theme
      document.documentElement.setAttribute('data-theme',newTheme)
    // set theme in local storage 
      localStorage.setItem('theme',newTheme)
    }
  return(
    <main className=" m-0 p-0 bg-base-200 ">
      <section className="flex  max-w-[95%] overflow-hidden lg:max-w-[90%] mx-auto ">
          <sidebar className={' w-0 lg:w-[25%]'}>
     <DashboardSidebar></DashboardSidebar>
     </sidebar>
    <section className={'w-[98%] mx-auto min-h-screen lg:mx-0 lg:w-[74%]'}>
    <div className=" h-10 md:h-14 py-1 md:py-3 shadow-md flex items-center px-3   bg-base-300">
    <div className="relative pt-2 flex justify-center flex-1">
    <Link href={"/"} className="w-38  flex gap-2  bg-[#fa7b26] text-white py-1  mb-2 px-2 rounded-full items-center ">
   
      <Image
        src={logo}
        className=" rounded-lg w-7 h-6  md:w-[30px] md:h-[30px]"
        alt="logo"
        width={40}
        height={40}
      ></Image>
    <h3 className=" text-sm lg:text-lg font-black">Poultry </h3>
    <h3 className=" text-sm lg:text-lg font-black">Hub </h3>
      
    </Link>
  </div>
<div>
 {/* theme controller  */}

 <button title="Change Theme" className=" pt-1" onClick={toggleTheme}>
                {theme == "light" ? (
                  <IoIosSunny className=" text-xl lg:text-2xl font-black text-gray-800"></IoIosSunny>
                ) : (
                  <IoIosMoon className=" text-xl lg:text-2xl font-black "></IoIosMoon>
                )}
              </button>

</div>
  </div>
      
    </section>
      </section>
   
    </main>
  )
}