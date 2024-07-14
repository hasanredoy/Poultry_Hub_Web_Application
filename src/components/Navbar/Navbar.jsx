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
import { FaHome, FaQuestionCircle, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { MdDashboard, MdOutlineContactPage, MdOutlineContactSupport, MdOutlineReviews, MdPersonAddAlt1 } from "react-icons/md";
import { GrContact } from "react-icons/gr";





const Navbar = () => {

const user = true
  // get path name
  const pathName = usePathname();
  console.log(pathName);
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
      name: "Chickens And Feeds",
      path: "/chicken_and_feeds",
    },
    {
      name: "Build Idea",
      path: "/build_idea",
    },
   
    {
      name: "Become Seller",
      path: "/become_seller",
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
  <nav className={` flex justify-between items-center max-w-[95%]  lg:max-w-[85%]  mx-auto py-2 ${theme=="light"?"text-black":"text-white"}  mb-0 ${pathName=='/login'?'hidden':'flex'} ${pathName=='/register'?'hidden':'flex'}`} >
  {/* nav bar start */}
  <div className="">
    <div>
      <div className=" cursor-pointer ">
        {showLinks ? (
          <RiMenuUnfold2Fill
            onClick={() => setShowLinks(false)}
            className=" text-lg text-[#fe6702]   -400 md:text-2xl font-black"
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
          className="bg-base-300 flex gap-3 md:gap-6  z-[30] absolute mt-3 p-5  shadow-lg top-[40px] rounded-l-none rounded-md left-0 flex-col w-48 md:w-60 min-h-screen bg-opacity-80 "
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
               <span  className={` flex gap-2  items-center ${
                pathName === link.path
                  ? "text-[#FFD700] rounded-md bg-slate-800 px-2 font-black md:font-black "
                  : ""
              } `}>
                {index==0&&<FaHome className="  text-lg lg:text-xl"></FaHome>}
                {index==2&&<HiLightBulb className=" text-lg lg:text-xl"></HiLightBulb>}
                {index==1&&<FaShoppingCart className=" text-lg lg:text-xl"></FaShoppingCart>}
                {index==3&&<MdPersonAddAlt1 className="  text-lg lg:text-xl"></MdPersonAddAlt1>}
                
                {index==4&&<GrContact className="  text-lg lg:text-xl"></GrContact>}
                {index==5&&<MdOutlineContactSupport className="  text-lg lg:text-xl"></MdOutlineContactSupport>}
                {link.name}</span>   
            </Link>
          ))}
        </ul>
      )}
    </div>
  </div>
  {/* nav center */}
  <div className="relative  flex justify-center flex-1">
    <Link href={"/"} className="w-38 ml-0 md:ml-24 lg:ml-40 flex gap-2  bg-[#fa7b26] text-white py-1  px-2 rounded-full items-center ">
   
      <Image
        src={logo}
        className=" rounded-lg w-7 h-7  md:w-[30px] md:h-[30px]"
        alt="logo"
        width={40}
        height={40}
      ></Image>
    <h3 className=" text-sm lg:text-lg font-black">Poultry </h3>
    <h3 className=" text-sm lg:text-lg font-black">Hub </h3>
      
    </Link>
  </div>
  {/* nav end */}
  <div className=" relative flex justify-center items-center gap-3 lg:gap-5 ">
    {/* theme controller  */}
 
    <button title="Change Theme" className="" onClick={toggleTheme}>{theme=="light"?<IoIosSunny className=" text-xl lg:text-2xl font-black text-gray-800"></IoIosSunny >:<IoIosMoon className=" text-xl lg:text-2xl font-black "></IoIosMoon>}</button>
{user?
  <div className="dropdown dropdown-hover relative">
  <div role="button" className="avatar online placeholder">

  <div className="bg-neutral text-neutral-content w-10 rounded-full">
    <span className="text-sm">AI</span>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[40] w-40 flex items-center -left-28 top-[42px] absolute p-2 shadow flex-col gap-2">
 
   <Link href={'/'}>
      <button className=" btn-primary flex items-center gap-2"><MdDashboard></MdDashboard> Dashboard </button>
   </Link>
   <Link href={'/'}>
      <button className=" btn-primary w-28 flex items-center gap-2"><FaSignOutAlt></FaSignOutAlt> LogOut</button>
   </Link>
  </ul>
</div>
</div>
:<div className=" flex gap-2 flex-row-reverse items-center ">
  <Link href={'/login'}>
<button className=" btn-primary flex items-center gap-2"> <FaSignInAlt></FaSignInAlt> Login</button>
</Link>
<div className=" hidden lg:block border h-full border-gray-400 w-1 min-h-10 mx-2"> </div>
  <Link href={'/register'}>
<button className="  hidden lg:flex btn-outline  items-center gap-2"><FaSignInAlt></FaSignInAlt> Register</button>
</Link>
  </div>}
  </div>
</nav>
  );
};

export default Navbar;
