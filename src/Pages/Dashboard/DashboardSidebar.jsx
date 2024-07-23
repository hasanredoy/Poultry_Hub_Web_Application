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

  return (
    <div className=" w-full">
     {/* links for small devices */}
     <div className=" block lg:hidden">
     <LinksForSmallDevice></LinksForSmallDevice>
     </div>
      {/* links for lg  */}
     <div className=" hidden lg:block">
      <LinksForLargeDevice></LinksForLargeDevice>
     </div>
     
    </div>
  );
};

export default DashboardSidebar;
