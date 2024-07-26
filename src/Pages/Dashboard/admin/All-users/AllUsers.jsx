'use client'
import Heading from "@/components/custom/Heading/Heading";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import { useEffect, useState } from "react";
import {  FaTrash } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async () => {
  const res = await axiosHook.get(`/api/all_items`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const AllUsers = () => {
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([]);

  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadAllItems();
      console.log(data);
      setAllChickenAndFeeds(data);
    };
    loader();
  }, []);

  const role = 'user'
  return (
    <main className=" my-10">
    <Heading
      subHeading={"Welcome Back"}
      title={"Here are all users"}
    ></Heading>
  <section className=" flex justify-between  mx-8 my-5">
  <h1 className="text-xl font-bold ">Total Users: {allChickenAndFeeds?.length}</h1>
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
          {allChickenAndFeeds.map((user, index) => (
            <tr className="border-b" key={index}>
              <td className="px-3 w-16 h-16 rounded-full border-r border-gray-400">
                <Image
                  src={user?.image}
                  width={60}
                  height={60}
                  className=" w-full h-full"
                  alt={user?.name}
                ></Image>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{user?.name}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p className="">{user?.email}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{user?.registerDate}</p>
              </td>
              <td className="px-3 py-2 flex gap-4">
                <button title="Make Admin" className="btn btn-primary">
                 {role!=='admin'?<span className=" flex items-center gap-2"> <IoMdPersonAdd></IoMdPersonAdd> Make Admin </span>:"Admin"} 
                </button>
                <button title="Delete" className="btn text-red-600">
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