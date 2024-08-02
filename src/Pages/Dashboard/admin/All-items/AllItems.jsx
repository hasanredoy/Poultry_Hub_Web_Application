'use client'
import Heading from "@/components/custom/Heading/Heading";
import Pagination from "@/components/custom/Pagination/Pagination";
import useAxios from "@/hooks/useAxios";
import usePagination from "@/hooks/usePagination";
import { all } from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async (page,size) => {
  const res = await axiosHook.get(
    `/api/allItems?page=${page}&size=${size}`
  );
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const loadAllItemsCount = async () => {
  const res = await axiosHook.get(
    `/api/count/all_items`
  );
  // console.log(res?.data?.result);
  return res?.data;
};


const AllItems = () => {
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([]);
  
  // state to handle count 
  const [count,setCount]=useState(0)
  // state to handle price 
  const [price,setPrice]=useState(0)

  const [currentPage,setCurrentPage]=useState(0)
    const [totalPage,pages]=usePagination(count,8)
  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadAllItems(currentPage,8);
      console.log(data);
      setAllChickenAndFeeds(data);
    };
    loader();
  }, [currentPage]);

  useEffect(() => {
    //function for call loadAllItemsCount
    const loader = async () => {
      const data = await loadAllItemsCount();
      // console.log(data);
      setCount(data?.count);
      setPrice(data?.totalPrice)
    };
    loader();
  }, []);
  console.log({price});
  

  return (
    <main className=" my-10">
    <Heading
      subHeading={"Welcome Back"}
      title={"Here are all items"}
    ></Heading>
  <section className=" flex justify-between  mx-8 my-5">
  <h1 className="text-xl font-bold ">Total Items: {count}</h1>
  <h1 className="text-xl font-bold ">Total Revenue: {price.toFixed(2)} $</h1>
  </section>
    {/* table section  */}
    <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
      <table className="w-full p-6 text-base text-center whitespace-nowrap">
        <thead>
          <tr className=" border-b border-gray-900">
            <th className="p-3 border-r border-gray-300">Image</th>
            <th className="p-3 border-r border-gray-300">Item Name</th>
            <th className="p-3 border-r border-gray-300">Price</th>
            <th className="p-3 border-r border-gray-300">Listing Date</th>
            <th className="p-3 border-r border-gray-300">Valid Till</th>
            <th className="p-3 border-r border-gray-300">Total Rating</th>
            <th className="p-3 border-r border-gray-300">Total Sell</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="border-b text-sm ">
          {allChickenAndFeeds.map((data, index) => (
            <tr className="border-b">
              <td className="px-3 border-r border-gray-400">
                <Image
                  src={data?.image}
                  width={40}
                  height={40}
                  alt={data?.name}
                ></Image>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{data?.name}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p className="">{data?.price}$</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{data?.listingDate}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{data?.expireDate}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{data?.totalRating}</p>
              </td>
              <td className="px-3 py-2 border-r border-gray-400">
                <p>{data?.totalSell}</p>
              </td>
              <td className="px-3 py-2 flex gap-2">
                <button title="Delete" className="btn text-red-600">
                  <FaTrash></FaTrash>
                </button>
                <button title="Edit" className="btn text-green-600">
                  <FaPen></FaPen>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} pages={pages} ></Pagination>
    </section>
  </main>
  );
};

export default AllItems;