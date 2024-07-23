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

import { MdAddShoppingCart } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

import { useEffect, useState } from "react";
import Link from "next/link";

const LinksForLargeDevice = () => {
const pathname = usePathname()
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
const role='user'
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

return (
    <div className={` hidden lg:block  min-h-screen   pt-4  bg-base-300 `}>
    <div className=" h-[calc(100dvh-30px)] flex max-h-screen flex-col ">
      <div className="">
        {/* profile and theme controller  */}
        <section>
          <div className="flex items-center p-2 space-x-4">
            <img
              src=""
              alt=""
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-bold text-black">
                Leroy Jenkins
              </h2>
            </div>
          </div>
          {/* theme controller  */}

          <button title="Change Theme" className="" onClick={toggleTheme}>
            {theme == "light" ? (
              <IoIosSunny className=" text-xl lg:text-2xl font-black text-gray-800"></IoIosSunny>
            ) : (
              <IoIosMoon className=" text-xl lg:text-2xl font-black "></IoIosMoon>
            )}
          </button>
        </section>
        <div className="divider divider-accent"></div>
        {role == "admin" && (
          <>
            {/* admin links */}
            <Link
              href={"/dashboard"}
              className={`flex items-center font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaHome></FaHome>Admin Home
            </Link>
            <Link
              href={"/dashboard/profile"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/profile"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/all_users"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/all_users"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaUsers></FaUsers>All Users{" "}
            </Link>
            <Link
              href={"/dashboard/all_items"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/all_items"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              {" "}
              <FaList></FaList>All Items
            </Link>
            <Link
              href={"/dashboard/add_item"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/add_item"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              {" "}
              <MdAddShoppingCart></MdAddShoppingCart>Add Item
            </Link>
          </>
        )}
        {role == "user" && (
          <>
            {/* user links */}
            <Link
              href={"/dashboard"}
              className={`flex items-center font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaHome></FaHome>User Home
            </Link>
            <Link
              href={"/dashboard/profile"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/profile"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/my_cart"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/my_cart"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaShoppingCart></FaShoppingCart>My Cart <span></span>
            </Link>
            <Link
              href={"/dashboard/payment_history"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/payment_history"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              {" "}
              <FaHistory></FaHistory>Payment History
            </Link>
          </>
        )}
        {role == "seller" && (
          <>
            {/* seller links */}
            <Link
              href={"/dashboard/seller"}
              className={`flex items-center font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/seller"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaHome></FaHome>Home
            </Link>
            <Link
              href={"/dashboard"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/my_cart"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/my_listedItem"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              <FaShoppingCart></FaShoppingCart>My Listed Item <span></span>
            </Link>
            <Link
              href={"/dashboard/payment_history"}
              className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/payment_history"
                  ? "text-black bg-white rounded-r-md"
                  : "text-black"
              }`}
            >
              {" "}
              <FaPlus></FaPlus> List a item
            </Link>
          </>
        )}
      </div>
      <div className="flex-1 divider"></div>
      {/* static links  */}
      <div className=" px-5 ">
        <Link
          href={"/"}
          className={"flex items-center font-bold gap-2 text-black"}
        >
          <FaHome></FaHome>Back Home
        </Link>
        <Link
          href={"/chicken_and_feeds"}
          className={"flex items-center font-bold gap-2 text-black my-3"}
        >
          <AiFillProduct></AiFillProduct> All Products
        </Link>
        <Link
          href={"/build_idea"}
          className={"flex items-center font-bold gap-2 text-black my-3"}
        >
          <FaLightbulb></FaLightbulb> Build Idea
        </Link>
        <Link
          href={"/become_seller"}
          className={"flex items-center font-bold gap-2 text-black my-3"}
        >
          <MdPersonAdd></MdPersonAdd> Become Seller
        </Link>
        <Link
          href={"/contact"}
          className={"flex items-center font-bold gap-2 my-3 text-black"}
        >
          <MdOutlineContactSupport></MdOutlineContactSupport>Contact
        </Link>
        <Link
          href={"/reviews"}
          className={"flex items-center font-bold gap-2 my-3 text-black"}
        >
          {" "}
          <FaStar></FaStar>Reviews
        </Link>
        <h3
          onClick={handleLogOut}
          className={
            " cursor-pointer flex items-center font-bold gap-2 my-3 text-black"
          }
        >
          {" "}
          <FaSignOutAlt></FaSignOutAlt>Logout
        </h3>
      </div>
    </div>
  </div>
  );
};

export default LinksForLargeDevice;