'use client'
import Heading from "@/components/custom/Heading/Heading";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import useGetUserRole from "@/hooks/useGetUserRole";
import Image from "next/image";
import { useEffect, useState } from "react";
import {  FaTrash } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import swal from "sweetalert";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadUsers = async () => {
  const res = await axiosHook.get(`/api/user`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const AllUsers = () => {
  // state for all chicken and feed
  const [allUsers, setAllUsers] = useState([]);
 // loading state
 const [loading, setLoading]=useState(false)
 // refetch state
 const [refetch, setRefetch]=useState(false)
 
  const user = useGetUser()

  useEffect(() => {
    //function for call loadAllUsers
    const loader = async () => {
      setLoading(true)
      const data = await loadUsers();
      console.log(data);
      setAllUsers(data);
      setLoading(false)
    };
    loader();
  }, [refetch]);
  // get user role 
  const role = useGetUserRole(user?.email)

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
      text: "You wanna make this user admin",
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
       swal(`${name} is admin from now`, {
          icon: "success",
        });
    }
       
      } else {
        swal("canceled!");
      }
    });
 
  }

  return (
    <main className=" my-10">
    <Heading
      subHeading={"Welcome Back"}
      title={"Here are all users"}
    ></Heading>
  <section className=" flex justify-between  mx-8 my-5">
  <h1 className="text-xl font-bold ">Total Users: {allUsers?.length}</h1>
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
          {loading&&<Skeleton/>}
          {allUsers.map((userData, index) => (
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
    </section>
  </main>
  );
};

export default AllUsers;