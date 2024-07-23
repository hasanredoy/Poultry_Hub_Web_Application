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

const LinksForSmallDevice = () => {
  const pathname = usePathname();
  // state for theme
  const [theme, setTheme] = useState("light");

  //check local storage and set the local storage value in theme state
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);
  // get theme from use theme hook
  //toggle theme
  const toggleTheme = () => {
    // make new theme opposite of default value of theme state
    const newTheme = theme === "light" ? "dark" : "light";
    // then set newTheme in theme state
    setTheme(newTheme);
    // set newTheme as data theme
    document.documentElement.setAttribute("data-theme", newTheme);
    // set theme in local storage
    localStorage.setItem("theme", newTheme);
  };
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
        className={`${
          theme === "light" ? "text-black" : "text-black"
        } z-50 lg:hidden text-2xl  fixed`}
      >
        <TiThMenu></TiThMenu>
      </button>
      <div
        className={` ${
          menu ? "block" : "hidden"
        } absolute z-40 w-[60%] min-h-svh   px-5 pt-4  bg-[#f86502] `}
      >
        <div className=" h-full flex max-h-screen flex-col justify-evenly">
          <div className=" flex-1">
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
            {role ? (
              <>
                {/* admin links */}
                <Link
                  href={"/dashboard/adminHome"}
                  className={"flex items-center font-bold gap-2 text-black"}
                >
                  <FaHome></FaHome>Admin Home
                </Link>
                <Link
                  href={"/dashboard/profile"}
                  className={
                    "flex items-center font-bold gap-2 text-black my-3"
                  }
                >
                  <FaUser></FaUser> My Profile
                </Link>
                <Link
                  href={"/dashboard/allUsers"}
                  className={
                    "flex items-center font-bold gap-2 my-3 text-black"
                  }
                >
                  <FaUsers></FaUsers>All Users{" "}
                </Link>
                <Link
                  href={"/dashboard/allItems"}
                  className={
                    "flex items-center font-bold gap-2 my-3 text-black"
                  }
                >
                  {" "}
                  <FaList></FaList>All Items
                </Link>
                <Link
                  href={"/dashboard/addItems"}
                  className={
                    "flex items-center font-bold gap-2 my-3 text-black"
                  }
                >
                  {" "}
                  <MdAddShoppingCart></MdAddShoppingCart>Add Items
                </Link>
              </>
            ) : (
              <>
                {/* user links */}
                <Link
                  href={"/dashboard/userHome"}
                  className={"flex items-center font-bold gap-2 text-black"}
                >
                  <FaHome></FaHome>User Home
                </Link>
                <Link
                  href={"/dashboard/profile"}
                  className={
                    "flex items-center font-bold gap-2 text-black my-3"
                  }
                >
                  <FaUser></FaUser> My Profile
                </Link>
                <Link
                  href={"/dashboard/myCart"}
                  className={
                    "flex items-center font-bold gap-2 my-3 text-black"
                  }
                >
                  <FaShoppingCart></FaShoppingCart>My Cart{" "}
                  <span>{userCart?.length}</span>
                </Link>
                <Link
                  href={"/dashboard/paymentHistory"}
                  className={
                    "flex items-center font-bold gap-2 my-3 text-black"
                  }
                >
                  {" "}
                  <FaHistory></FaHistory>Payment History
                </Link>
              </>
            )}
          </div>
          {/* static links  */}
          <div className="divider"></div>
          <div>
            <Link
              href={"/"}
              className={"flex items-center font-bold gap-2 text-black"}
            >
              <FaHome></FaHome> Home
            </Link>
            <Link
              href={"/allGadgets"}
              className={"flex items-center font-bold gap-2 text-black my-3"}
            >
              <LuMonitorSmartphone></LuMonitorSmartphone>All Gadgets
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
    </section>
  );
};

export default LinksForSmallDevice;
