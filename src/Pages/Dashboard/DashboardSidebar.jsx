'use client'
import {FaHistory, FaHome, FaLightbulb, FaList, FaMoon, FaShoppingCart, FaSignOutAlt, FaStar, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineContactSupport, MdPersonAdd } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { LuMonitorSmartphone } from "react-icons/lu";
import { useEffect, useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { usePathname } from "next/navigation";



const DashboardSidebar = () => {
  
  const pathname = usePathname()
  const [menu , setMenu]=useState(false)
  const handleLogOut=()=>{
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
    
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const handleTheme = (e) => {
    //  console.log(e.target.value);
    setTheme(e.target.value);
    if (e.target.value === "light") {
      localStorage.setItem("theme", "light");
    } else if (e.target.value === "dark") {
      localStorage.setItem("theme", "dark");
    }
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("theme"));
  };
  // console.log(theme);
  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);
const isAdmin =true
// console.log(data);
  return (
    <div className=" w-full">

      {/* sidebar */}
       <button onClick={()=>setMenu(!menu)} className={`${theme==='light'?'text-black':'text-white'} z-50 lg:hidden text-2xl  fixed`}><TiThMenu></TiThMenu></button>
      <div className={` ${menu?"block":'hidden'} absolute z-40 w-[60%] min-h-svh   px-5 pt-4  bg-[#e2fafb] `}>
       <div className=" h-full flex max-h-screen flex-col justify-evenly">
       <div className=" flex-1">

       <div
              className={` text-white flex gap-2  items-center   p-2 border-b-2 border-[#15f7ce] mb-3 `}
            >
              <span className="  text-base lg:text-xl ">
                {theme === "light" && (
                  <IoSunnySharp className=""></IoSunnySharp>
                )}
                {theme === "dark" && <FaMoon></FaMoon>}
              </span>
              <select
                className=" bg-[#039396] text-white font-bold outline-none border-0"
                defaultValue={
                  localStorage.getItem("theme")
                    ? localStorage.getItem("theme")
                    : "Theme"
                }
                onChange={handleTheme}
                name="themeController"
              >
                <option value="light"> Light </option>
                <option value="dark">Dark </option>
              </select>
            </div>
            {
          isAdmin?<>
          {/* admin links */}
          <Link href={'/dashboard/adminHome'} className={'flex items-center font-bold gap-2 text-white'}><FaHome></FaHome >Admin Home</Link>
          <Link href={'/dashboard/profile'} className={'flex items-center font-bold gap-2 text-white my-3'}><FaUser></FaUser > My Profile</Link>
          <Link href={'/dashboard/allUsers'} className={'flex items-center font-bold gap-2 my-3 text-white'}><FaUsers></FaUsers >All Users </Link>
          <Link href={'/dashboard/allItems'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <FaList></FaList>All Items</Link>
          <Link href={'/dashboard/addItems'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <MdAddShoppingCart></MdAddShoppingCart>Add Items</Link>
          </>:<>
          {/* user links */}
          <Link href={'/dashboard/userHome'} className={'flex items-center font-bold gap-2 text-white'}><FaHome></FaHome >User Home</Link>
          <Link href={'/dashboard/profile'} className={'flex items-center font-bold gap-2 text-white my-3'}><FaUser></FaUser > My Profile</Link>
          <Link href={'/dashboard/myCart'} className={'flex items-center font-bold gap-2 my-3 text-white'}><FaShoppingCart></FaShoppingCart >My Cart <span>{userCart?.length}</span></Link>
          <Link href={'/dashboard/paymentHistory'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <FaHistory></FaHistory>Payment History</Link>
          </>
        }
         
        </div>
        {/* static links  */}
        <div className="divider"></div>
        <div>
        
          
          <Link href={'/'} className={'flex items-center font-bold gap-2 text-white'}><FaHome></FaHome > Home</Link>
          <Link href={'/allGadgets'} className={'flex items-center font-bold gap-2 text-white my-3'}><LuMonitorSmartphone></LuMonitorSmartphone>All Gadgets</Link>
          <Link href={'/contact'} className={'flex items-center font-bold gap-2 my-3 text-white'}><MdOutlineContactSupport></MdOutlineContactSupport >Contact</Link>
          <Link href={'/reviews'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <FaStar></FaStar>Reviews</Link>
          <h3 onClick={handleLogOut}  className={' cursor-pointer flex items-center font-bold gap-2 my-3 text-white'}> <FaSignOutAlt></FaSignOutAlt>Logout</h3>
        </div>
       </div>
      </div>
      {/* links for lg  */}
      <div className={` hidden lg:block  min-h-screen   pt-4  bg-[#f86502] `}>
       <div className=" h-[calc(100dvh-30px)] flex max-h-screen flex-col ">
       <div className="">

       <div
              className={` text-white flex gap-2  items-center   p-2 border-b-2 border-[#fe6702] mb-3 `}
            >
              <span className="  text-base lg:text-xl ">
                {theme === "light" && (
                  <IoSunnySharp className=""></IoSunnySharp>
                )}
                {theme === "dark" && <FaMoon></FaMoon>}
              </span>
              <select
                className=" bg-[#039396] text-white font-bold outline-none border-0"
                defaultValue={
                  localStorage.getItem("theme")
                    ? localStorage.getItem("theme")
                    : "Theme"
                }
                onChange={handleTheme}
                name="themeController"
              >
                <option value="light"> Light </option>
                <option value="dark">Dark </option>
              </select>
            </div>
        {
          isAdmin?<>
          {/* admin links */}
          <Link  href={'/dashboard'} className={`flex items-center font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${pathname=='/dashboard'?'text-black bg-white rounded-r-md':'text-white'}`}><FaHome></FaHome >Admin Home</Link>
          <Link href={'/dashboard/profile'} className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${pathname=='/dashboard/profile'?'text-black bg-white rounded-r-md':'text-white'}`}><FaUser></FaUser > My Profile</Link>
          <Link href={'/dashboard/all_users'} className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${pathname=='/dashboard/all_users'?'text-black bg-white rounded-r-md':'text-white'}`}><FaUsers></FaUsers >All Users </Link>
          <Link href={'/dashboard/all_items'} className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${pathname=='/dashboard/all_items'?'text-black bg-white rounded-r-md':'text-white'}`}> <FaList></FaList>All Items</Link>
          <Link href={'/dashboard/add_item'} className={`flex items-center my-3 font-bold gap-2 hover:text-black  hover:rounded-r-md px-5 mr-4 ${pathname=='/dashboard/add_item'?'text-black bg-white rounded-r-md':'text-white'}`}> <MdAddShoppingCart></MdAddShoppingCart>Add Item</Link>
          </>:<>
          {/* user links */}
          <Link href={'/dashboard/userHome'} className={'flex items-center font-bold gap-2 text-white'}><FaHome></FaHome >User Home</Link>
          <Link href={'/dashboard/profile'} className={'flex items-center font-bold gap-2 text-white my-3'}><FaUser></FaUser > My Profile</Link>
          <Link href={'/dashboard/myCart'} className={'flex items-center font-bold gap-2 my-3 text-white'}><FaShoppingCart></FaShoppingCart >My Cart <span></span></Link>
          <Link href={'/dashboard/paymentHistory'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <FaHistory></FaHistory>Payment History</Link>
          </>
        }
         
        </div>
        <div className="flex-1 divider"></div>
        {/* static links  */} 
        <div className=" px-5 " >
        
          
          <Link href={'/'} className={'flex items-center font-bold gap-2 text-white'}><FaHome></FaHome >Back Home</Link>
          <Link href={'/chicken_and_feeds'} className={'flex items-center font-bold gap-2 text-white my-3'}><AiFillProduct></AiFillProduct> All Products</Link>
          <Link href={'/build_idea'} className={'flex items-center font-bold gap-2 text-white my-3'}><FaLightbulb></FaLightbulb> Build Idea</Link>
          <Link href={'/become_seller'} className={'flex items-center font-bold gap-2 text-white my-3'}><MdPersonAdd></MdPersonAdd> Become Seller</Link>
          <Link href={'/contact'} className={'flex items-center font-bold gap-2 my-3 text-white'}><MdOutlineContactSupport></MdOutlineContactSupport >Contact</Link>
          <Link href={'/reviews'} className={'flex items-center font-bold gap-2 my-3 text-white'}> <FaStar></FaStar>Reviews</Link>
          <h3 onClick={handleLogOut}  className={' cursor-pointer flex items-center font-bold gap-2 my-3 text-white'}> <FaSignOutAlt></FaSignOutAlt>Logout</h3>
        </div>
       </div>
      </div>
    
    </div>
  );
};

export default DashboardSidebar;