"use client";
import {
  FaHistory,
  FaHome,
  FaLightbulb,
  FaList,
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
import Link from "next/link";
import { useEffect, useState } from "react";

import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
const LinksForSmallDevice = () => {
  const pathname = usePathname();

  const role = "user";
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
    <section>
      {/* sidebar */}
      <button
        onClick={() => setMenu(!menu)}
        className={` z-50 lg:hidden text-2xl  left-4 md:left-8 top-2 md:top-4  fixed`}
      >
       {menu?<RiMenuUnfold2Fill></RiMenuUnfold2Fill>:<RiMenuUnfoldFill></RiMenuUnfoldFill>}
      </button>
      <div
        className={` ${
          menu ? "block" : "hidden"
        } absolute z-40 w-[60%] md:w-[40%] min-h-svh pt-8 md:pt-11  bg-base-300 `}
      >
        <div className=" h-full flex max-h-screen flex-col justify-evenly">
          <div className=" flex-1">
            {/* profile and theme controller  */}
            <section className=" border-b border-gray-900 pb-2 mb-4 flex justify-between px-1 ">
              <div className="flex items-center p-1 space-x-4">
                <img
                  src=""
                  alt=""
                  className=" w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-500"
                />
                <div>
                  <h2 className=" text-sm lg:text-lg font-bold ">
                    Leroy Jenkins
                  </h2>
                </div>
              </div>
           
            </section>
            {role == "admin" && (
          <>
            {/* admin links */}
            <Link
              href={"/dashboard/admin_home"}
              className={`flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/admin_home"
                  ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaHome></FaHome>Admin Home
            </Link>
            <Link
              href={"/dashboard"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/all_users"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/all_users"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaUsers></FaUsers>All Users{" "}
            </Link>
            <Link
              href={"/dashboard/all_items"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/all_items"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              {" "}
              <FaList></FaList>All Items
            </Link>
            <Link
              href={"/dashboard/add_item"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/add_item"
                   ? " text-black bg-white rounded-r-md"
                  : " "
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
              href={"/dashboard/user_home"}
              className={`flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/user_home"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaHome></FaHome>User Home
            </Link>
            <Link
              href={"/dashboard"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/my_cart"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/my_cart"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaShoppingCart></FaShoppingCart>My Cart <span></span>
            </Link>
            <Link
              href={"/dashboard/payment_history"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/payment_history"
                   ? " text-black bg-white rounded-r-md"
                  : " "
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
              href={"/dashboard/seller_home"}
              className={`flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/seller_home"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaHome></FaHome>Home
            </Link>
            <Link
              href={"/dashboard"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaUser></FaUser> My Profile
            </Link>
            <Link
              href={"/dashboard/my_cart"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/my_listedItem"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              <FaShoppingCart></FaShoppingCart>My Listed Item <span></span>
            </Link>
            <Link
              href={"/dashboard/payment_history"}
              className={`flex items-center my-3 text-sm md:text-base font-semibold md:font-bold gap-2 hover:   hover:rounded-r-md px-5 mr-4 ${
                pathname == "/dashboard/payment_history"
                   ? " text-black bg-white rounded-r-md"
                  : " "
              }`}
            >
              {" "}
              <FaPlus></FaPlus> List a item
            </Link>
          </>
        )}
          </div>
          <div className="divider"></div>
          {/* static links  */}
          <div className=" px-5 ">
        <Link
          href={"/"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2  "}
        >
          <FaHome></FaHome>Back Home
        </Link>
        <Link
          href={"/chicken_and_feeds"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2   my-3"}
        >
          <AiFillProduct></AiFillProduct> All Products
        </Link>
        <Link
          href={"/build_idea"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2   my-3"}
        >
          <FaLightbulb></FaLightbulb> Build Idea
        </Link>
        <Link
          href={"/become_seller"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2   my-3"}
        >
          <MdPersonAdd></MdPersonAdd> Become Seller
        </Link>
        <Link
          href={"/contact"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 my-3  "}
        >
          <MdOutlineContactSupport></MdOutlineContactSupport>Contact
        </Link>
        <Link
          href={"/reviews"}
          className={"flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 my-3  "}
        >
          {" "}
          <FaStar></FaStar>Reviews
        </Link>
        <h3
          onClick={handleLogOut}
          className={
            " cursor-pointer flex items-center text-sm md:text-base font-semibold md:font-bold gap-2 my-3  "
          }
        >
          {" "}
          <FaSignOutAlt></FaSignOutAlt>Logout
        </h3>
      </div>
        </div>
      </div>
    </section>
  );
};

export default LinksForSmallDevice;
