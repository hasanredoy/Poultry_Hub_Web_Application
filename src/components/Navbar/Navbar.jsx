"use client";
import Image from "next/image";
import logo from "../../app/favicon.ico";
import Link from "next/link";
import { useEffect, useState } from "react";

// import hamburgers
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { FaHome, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineContactPage, MdOutlineContactSupport, MdOutlineReviews, MdPersonAddAlt1 } from "react-icons/md";
import { GrContact } from "react-icons/gr";





const Navbar = () => {
  // get path name
  const pathName = usePathname();
  // links handler state
  const [showLinks, setShowLinks] = useState(false);
    // theme handler
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

  // navlinks
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Build Idea",
      path: "/build_idea",
    },
    {
      name: "Chickens And Feeds",
      path: "/chicken_and_feeds",
    },
    {
      name: "Become Seller",
      path: "/become_seller",
    },
    {
      name: "FaQ",
      path: "/faq",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Contact Us",
      path: "/contact_us",
    },
  ];

  return (
    <nav className={` flex justify-between items-center max-w-[95%] overflow-hidden lg:max-w-[85%]  mx-auto py-2 ${theme=="light"?"text-black":"text-white"}  mb-0`}>
      <div className="">
        <div>
          <div className=" cursor-pointer ">
            {showLinks ? (
              <RiMenuUnfold2Fill
                onClick={() => setShowLinks(false)}
                className=" text-lg text-yellow-400 md:text-2xl font-black"
              ></RiMenuUnfold2Fill>
            ) : (
              <RiMenuUnfoldFill
                onClick={() => setShowLinks(true)}
                className=" text-lg md:text-2xl font-black"
              ></RiMenuUnfoldFill>
            )}
          </div>
          {showLinks && (
            <ul
              onMouseLeave={() => setShowLinks(false)}
              className="bg-base-300 flex gap-3 md:gap-6  z-[30] absolute mt-3 p-5  shadow-lg top-[61px] rounded-l-none rounded-md left-0 flex-col w-60 min-h-screen bg-opacity-80 "
            >
              {navLinks.map((link, index) => (
                <Link
                  className={` text-sm lg:text-base font-medium md:font-black hover:scale-110 hover:text-[#FFD700] hover:bg-slate-800 hover:px-2 hover:rounded-md ${
                    pathName === link.path
                      ? "text-[#FFD700] font-black md:font-black "
                      : ""
                  } `}
                  href={link.path}
                  key={link.path}
                >
                   <span  className={` flex gap-2 items-center ${
                    pathName === link.path
                      ? "text-[#FFD700] rounded-md bg-slate-800 px-2 font-black md:font-black "
                      : ""
                  } `}>
                    {index==0&&<FaHome></FaHome>}
                    {index==1&&<HiLightBulb className="text-2xl"></HiLightBulb>}
                    {index==2&&<FaShoppingCart className=""></FaShoppingCart>}
                    {index==3&&<MdPersonAddAlt1 className=" text-xl"></MdPersonAddAlt1>}
                    {index==4&&<FaQuestionCircle className=" text-xl"></FaQuestionCircle>}
                    {index==5&&<GrContact className=" text-xl"></GrContact>}
                    {index==6&&<MdOutlineContactSupport className=" text-xl"></MdOutlineContactSupport>}
                    {link.name}</span>   
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="">
        <Link href={"/"} className=" flex gap-2  bg-yellow-400 text-black py-2  px-3 rounded-tr-3xl rounded-bl-3xl items-center ">
       
        <h3 className=" text-base lg:text-xl font-black">Poultry </h3>
          <Image
            src={logo}
            className=" rounded-lg w-7 h-7  md:w-[40px] md:h-[40px]"
            alt="logo"
            width={40}
            height={40}
          ></Image>
        <h3 className=" text-base lg:text-xl font-black">Hub </h3>
          
        </Link>
      </div>
      <div className=" relative flex justify-center items-center gap-3 lg:gap-5 ">
        {/* theme controller  */}
     
        <button className="" onClick={toggleTheme}>{theme=="light"?<IoIosSunny className=" text-4xl font-black text-yellow-400"></IoIosSunny >:<IoIosMoon className=" text-4xl font-black "></IoIosMoon>}</button>
        {/* avatar  */}
        <div className="avatar online placeholder">
          <div className="bg-neutral text-neutral-content w-10 lg:w-14 rounded-full">
            <span className="text-sm">AI</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
