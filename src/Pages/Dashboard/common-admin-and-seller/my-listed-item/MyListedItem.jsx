'use client'
import Heading from "@/components/custom/Heading/Heading";
import LoadingSpinner from "@/components/custom/LoadingSpinner/LoadingSpinner";
import SkeletonTable from "@/components/custom/Skeleton/SkeletonTable";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import swal from "sweetalert";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async (email) => {
  const res = await axiosHook.get(
    `/api/allItems?page=${0}&size=${50}&email=${email}`
  );
  // console.log(res?.data?.result);
  return res?.data?.result;
};

const MyListedItem = () => {
  //  get user
  const user = useGetUser()
  const [listedItem, setListedItem] = useState([]);
  const[loading , setLoading]=useState(true)
  const [refetch ,setRefetch]=useState(0)

  useEffect(() => {
    //function for call loadAllItems for user
    const loader = async () => {
      const data = await loadAllItems(user?.email);
      console.log(data);
      setListedItem(data);
      setLoading(false)
    };
    loader();
  }, [user,refetch]);
// console.log(listedItem);
const handlerForDeleteItem = async (id,name)=>{
  swal({
    title: "Are you sure?",
    text: `You Wanna delete ${name}`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
     axiosHook.delete(`/api/all_items/${id}`)
     .then(res =>{
       console.log(res.data);
      if(res?.data?.result?.deletedCount>0){
        setRefetch(refetch+1)
        swal(`${name} has been deleted Successfully!`, {
          icon: "success",
        });
      }
     })
     
    } else {
      swal("canceled!");
    }
  });
 
   
  }
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  if(!loading&&listedItem?.length<1){
    return <div className=" flex justify-center items-center flex-col gap-5 w-full h-[calc(100dvh-100px)] ">
    <h1 className=" text-xl font-bold">You haven't listed any item yet!</h1>
    <Link href={'/dashboard/add_item'} className="btn-primary">Add</Link >
  </div>
  }
  return (
    <main className=" my-10">
    <Heading
      subHeading={"Welcome Back"}
      title={"Here are all items you listed..."}
    ></Heading>
  <section className=" flex justify-between  mx-8 my-5">
  <h1 className="text-xl font-bold "></h1>
  <h1 className="text-xl font-bold "></h1>
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
          {listedItem.map((data, index) => (
            <tr key={index} className="border-b">
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
                <p>{data?.listingDate?.split("T")[0]}</p>
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
              <td className="px-3 py-2 flex gap-3">
                <button
                 onClick={()=>handlerForDeleteItem(data?._id,data?.name)} 
                 title="Delete" className="btn text-red-600">
                  <FaTrash></FaTrash>
                </button>
                <Link href={`/dashboard/${data?._id}`} title="Edit" className="btn text-green-600">
                  <FaPen></FaPen>
                </Link>
                <Link href={`/chicken_and_feeds/${data?._id}`} title="View Details" className="btn btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading&&<div className=" flex w-full min-w-full"><SkeletonTable></SkeletonTable></div>}

    </section>
  </main>
  );
};

export default MyListedItem;
