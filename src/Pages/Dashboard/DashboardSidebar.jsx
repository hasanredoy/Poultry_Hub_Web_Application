"use client";
import {
  FaHistory,
  FaHome,
  FaLightbulb,
  FaList,
  FaMoon,
  FaPlus,
  FaShoppingCart,
  FaSignOutAlt,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineContactSupport, MdPersonAdd } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoSunnySharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import LinksForLargeDevice from "./NavLinks/LinksForLargeDevice";
import LinksForSmallDevice from "./NavLinks/LinksForSmallDevice";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const handleLogOut = () => {
    Swal.fire({
      //   title: "Are you sure?",
      //   text: "You Want to Logout",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#039396",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, Logout"
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     logOut()
      //     .then(()=>{
      //       Swal.fire({
      //         title: "Logged Out Successfully",
      //         icon: "success"
      //       });
      //     })
      //   }
    });
  };
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


  const role = "user";
  // console.log(data);
  return (
    <div className=" w-full">
     {/* links for small devices */}
     <LinksForSmallDevice></LinksForSmallDevice>
      {/* links for lg  */}
     
      <LinksForLargeDevice></LinksForLargeDevice>
    </div>
  );
};

export default DashboardSidebar;
