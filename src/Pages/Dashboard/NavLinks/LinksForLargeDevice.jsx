"use client";
import {
  FaHistory,
  FaHome,
  FaLightbulb,
  FaList,
  FaShoppingCart,
  FaSignOutAlt,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import {
  MdChecklist,
  MdOutlineContactSupport,
  MdPersonAdd,
  MdPlaylistAdd,
} from "react-icons/md";

import { MdAddShoppingCart } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useGetUserRole from "@/hooks/useGetUserRole";
import swal from "sweetalert";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { FaUsersRectangle } from "react-icons/fa6";


const LinksForLargeDevice = () => {
  const pathname = usePathname();
  const user = useGetUser()
  const role = useGetUserRole(user?.email)
  // console.log(role);
  const handleLogOut = ()=>{
    swal({
    title: "Are you sure?",
    text: "You Wanna logout",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      signOut()
      swal("logged out!", {
        icon: "success",
      });
    } else {
      swal("canceled!");
    }
  });
  }
  

  return (
    <section
      className={` hidden lg:block min-h-screen lg:min-h-[1000px] pt-4  bg-base-300 `}
    >
      <div className=" h-[calc(100dvh-30px)] flex max-h-screen flex-col ">
        <div className="">
          {/* profile and theme controller  */}
          <section className=" border-b border-gray-900 pb-2 mb-4 flex justify-between px-1 ">
            <div className="flex items-center p-1 space-x-4">
              <Image
                src={user?.image}
                alt="profile image"
                width={40}
                height={40}
                className=" w-8 h-8 md:w-12 md:h-12 rounded-full "
              />
              <div>
                <h2 className=" text-sm lg:text-lg font-bold ">
                 {user?.name}
                </h2>
              </div>
            </div>
          </section>

          {role == "user" && (
            <>
              {/* user links */}
              <Link
                href={"/dashboard/user_home"}
                className={`flex items-center font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/user_home"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaHome></FaHome>User Home
              </Link>
              <Link
                href={"/dashboard"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaUser></FaUser> My Profile
              </Link>
              <Link
                href={"/dashboard/my_cart"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/my_cart"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaShoppingCart></FaShoppingCart>My Cart <span></span>
              </Link>
              <Link
                href={"/dashboard/payment_history"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/payment_history"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
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
                className={`flex items-center font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/seller_home"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaHome></FaHome>Home
              </Link>
              <Link
                href={"/dashboard"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaUser></FaUser> My Profile
              </Link>
              <Link
                href={"/dashboard/my_listed_item"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/my_listed_item"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaList></FaList> My Listed Item <span></span>
              </Link>
              <Link
                href={"/dashboard/add_item"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/add_item"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                {" "}
                <MdPlaylistAdd className="text-2xl"></MdPlaylistAdd> List a item
              </Link>
            </>
          )}
          {role == "admin" && (
            <>
              {/* admin links */}
              <Link
                href={"/dashboard/admin_home"}
                className={`flex items-center font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/admin_home"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaHome></FaHome>Admin Home
              </Link>
              <Link
                href={"/dashboard"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaUser></FaUser> My Profile
              </Link>
              <Link
                href={"/dashboard/all_users"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/all_users"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaUsers></FaUsers>All Users{" "}
              </Link>
              <Link
                href={"/dashboard/all_seller"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/all_seller"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <FaUsersRectangle></FaUsersRectangle> All Seller{" "}
              </Link>
              <Link
                href={"/dashboard/all_items"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/all_items"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                {" "}
                <FaList></FaList>All Items
              </Link>
              <Link
                href={"/dashboard/add_item"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/add_item"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                {" "}
                <MdPlaylistAdd className="text-xl"></MdPlaylistAdd> Add Item
              </Link>
              <Link
                href={"/dashboard/my_listed_item"}
                className={`flex items-center my-3 font-bold gap-2 hover:text-[#f86502]   hover:rounded-r-md px-5 mr-4 ${
                  pathname == "/dashboard/my_listed_item"
                    ? " text-primary  bg-white rounded-r-md"
                    : "  "
                }`}
              >
                <MdChecklist></MdChecklist> My Listed Item <span></span>
              </Link>
            </>
          )}
        </div>
        <div className="flex-1 divider"></div>
        {/* static links  */}
        <div className=" px-5 ">
          <Link
            href={"/"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2  "
            }
          >
            <FaHome></FaHome>Back Home
          </Link>
          <Link
            href={"/chicken_and_feeds"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2   my-3"
            }
          >
            <AiFillProduct></AiFillProduct> All Products
          </Link>
          <Link
            href={"/build_idea"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2   my-3"
            }
          >
            <FaLightbulb></FaLightbulb> Build Idea
          </Link>
          <Link
            href={"/become_seller"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2   my-3"
            }
          >
            <MdPersonAdd></MdPersonAdd> Become Seller
          </Link>
          <Link
            href={"/contact"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2 my-3  "
            }
          >
            <MdOutlineContactSupport></MdOutlineContactSupport>Contact
          </Link>
          <Link
            href={"/reviews"}
            className={
              "flex hover:text-[#f86502] items-center font-bold gap-2 my-3  "
            }
          >
            {" "}
            <FaStar></FaStar>Reviews
          </Link>
          <h3
            onClick={handleLogOut}
            className={
              " cursor-pointer hover:text-[#f86502] flex items-center font-bold gap-2 my-3  "
            }
          >
            {" "}
            <FaSignOutAlt></FaSignOutAlt>Logout
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LinksForLargeDevice;
