'use client'
import Heading from "@/components/custom/Heading/Heading";
import LoadingSpinner from "@/components/custom/LoadingSpinner/LoadingSpinner";
import Pagination from "@/components/custom/Pagination/Pagination";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import SkeletonTable from "@/components/custom/Skeleton/SkeletonTable";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import useGetUserRole from "@/hooks/useGetUserRole";
import usePagination from "@/hooks/usePagination";
import { GeneralContext } from "@/services/ContextProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {  FaSearch, FaTrash } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import swal from "sweetalert";

// get custom axios hook
const axiosHook = useAxios();
// load all user
const loadUsers = async (page,size,search) => {
  const res = await axiosHook.get(`/api/user?size=${size}&page=${page}&search=${search}`);
  console.log(res?.data?.result);
  return res?.data?.result;
};

const AllUsers = () => {
  const user = useGetUser()
  const [loader,setLoader]=useState(true)

  // state for all chicken and feed
  const [allUsers, setAllUsers] = useState([]);
 // loading state
 const [loading, setLoading]=useState(false)
 // refetch state
 const [refetch, setRefetch]=useState(false)
 
 // current page state 
 const {userCount}=useContext(GeneralContext)
 console.log(userCount);
 const [currentPage,setCurrentPage]=useState(0)
//  get pagination hook 
const [totalPage,pages]=usePagination(userCount,8)

// search state 
const [search , setSearch]=useState('')

 // get user role 
 const role = useGetUserRole(user?.email)
 

  useEffect(() => {
    //function for call loadAllUsers
    const loader = async () => {
      setLoading(true)
      const data = await loadUsers(currentPage,8,search);
      console.log(data);
      setAllUsers(data);
      setLoading(false)
      setLoader(false)
    };
    loader();
  }, [refetch,currentPage,search]);

  // handler to make admin 
  const handleMakeAdmin = async(name,email)=>{
  
    swal({
      title: "Are you sure?",
      text: "You wanna make this user admin",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        const {data}=await axiosHook.patch(`/api/user/${email}`)
        console.log(data);
      if(data?.result?.modifiedCount>0){
        setRefetch(!refetch)
       swal(`${name} is admin from now`, {
          icon: "success",
        });
    }
       
      } else {
        swal("canceled!");
      }
    });
 
  }
  // handler to make admin 
  const handleDeleteUser = async(name,email,type)=>{
   if(type=='admin'){
    return   swal(`${name} is an admin, you can't delete an admin from this website`, {
      icon: "error",
    });
   }
    swal({
      title: "Are you sure?",
      text: "You wanna delete this user",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        const {data}=await axiosHook.delete(`/api/user/${email}`)
        console.log(data);
      if(data?.result?.deletedCount>0){
        setRefetch(!refetch)
       swal(`${name} is deleted`, {
          icon: "success",
        });
    }
       
      } else {
        swal("canceled!");
      }
    });
 
  }
  if(loader){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <main className=" my-10">
    <Heading
      subHeading={"Welcome Back"}
      title={"Here are all users"}
    ></Heading>
    {/* total user and search inp section */}
  <section className=" flex flex-col lg:flex-row justify-between items-start gap-5 lg:items-center mx-1 lg:mx-8 my-5">
  <h1 className="text-base lg:text-xl font-bold ">Total Users: {userCount}</h1>
  <div className="join border">
        <input
          onBlur={(e)=>setSearch(e.target?.value)}
          type="text"
          placeholder="search user"
          className="input outline-none  join-item bg-base-100  font-bold" />
        <button className="btn  join-item flex items-center gap-2">Search <FaSearch></FaSearch></button>
      </div>
  </section>
    {/* table section  */}
    <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
      <table className="w-full p-6 text-base text-center whitespace-nowrap">
        <thead>
          <tr className=" border-b ">
            <th className="p-3 border-r border-gray-300">Image</th>
            <th className="p-3 border-r border-gray-300">Name</th>
            <th className="p-3 border-r border-gray-300">Email</th>
            <th className="p-3 border-r border-gray-300">Register Date</th>

            <th className="p-3">Actions</th>
          </tr>
        </thead>
          
        <tbody className="border-b text-sm ">
          {loading||allUsers.map((userData, index) => (
            <tr className="border-b" key={index}>
              <td className="px-3 w-16 h-16 rounded-full border-r border-gray-400">
                <Image
                  src={userData?.image}
                  width={60}
                  height={60}
                  className=" w-full h-full"
                  alt={userData?.name}
                ></Image>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{userData?.name}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p className="">{userData?.email}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{userData?.registerDate}</p>
              </td>
              <td className="px-3 py-2 flex gap-4">
               
                 {userData.type=='user'&& <button onClick={()=>handleMakeAdmin(userData?.name,userData?.email)} title="Make Admin" className="btn-primary flex items-center gap-2"> <IoMdPersonAdd></IoMdPersonAdd> Make Admin </button>} 
                 {userData.type=='seller'&&<span className=" btn flex items-center gap-2"> Seller </span>} 
                 {userData.type=='admin'&&userData?.isOwner!=='true'&&<span className=" btn flex items-center gap-2"> Admin </span>} 
                 {userData.type=='admin'&&userData?.isOwner=='true'&&<span className=" btn bg-green-700 text-white hover:text-black flex items-center gap-2"> Owner </span>} 
                <button onClick={()=>handleDeleteUser(userData?.name,userData?.email,userData?.type)} title="Delete" className="btn text-red-600">
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {loading&&<div className=" flex w-full min-w-full"><SkeletonTable/></div>}
      <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} pages={pages} />
    </section>
  </main>
  );
};

export default AllUsers;