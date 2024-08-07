"use client";
import Heading from "@/components/custom/Heading/Heading";
import LoadingSpinner from "@/components/custom/LoadingSpinner/LoadingSpinner";
import Pagination from "@/components/custom/Pagination/Pagination";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import SkeletonTable from "@/components/custom/Skeleton/SkeletonTable";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import usePagination from "@/hooks/usePagination";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import swal from "sweetalert";

const axiosHook = useAxios();
// function to load cart
const loadCart = async (email,page) => {
  const { data } = await axiosHook.get(`/api/cart?email=${email}&size=${6}&page=${page}`);
   console.log(data);
  return data?.result;
};
// function to load cart count
const loadCartCount = async (email) => {
  const { data } = await axiosHook.get(`/api/count/cart?email=${email}`);
  //  console.log(data);
  return data;
};

const UserCart = () => {
  //  state to handle refetch
  const [refetch, setRefetch] = useState(0);
  // cart state
  const [cart, setCart] = useState([]);
	// current page state 
	const [currentPage ,setCurrentPage]=useState(0)
	// cart count state 
	const [count , setCount] =useState(0)
	const [price , setPrice] =useState(0)

  const [loading ,setLoading]=useState(true)
	  // call pagination
		const [totalPage,pages] = usePagination(count, 6);
    const session = useSession()
    console.log(session);
  
  //  get user
  const user = useGetUser();
	// effect to call cart 
  useEffect(() => {
    setLoading(true)
    const loader = async () => {
      setLoading(true)
      const cartData = await loadCart(user?.email,currentPage);
      // console.log(cartData);
      setCart(cartData);
      setLoading(false)
    };
    setLoading(false)
    loader();
  }, [user, refetch,currentPage]);
	// effect to call cart count 
  useEffect(() => {
    const loader = async () => {
      const cartCount = await loadCartCount(user?.email);
      setCount(cartCount?.count);
      setPrice(cartCount?.price)
      setLoading(false)
    };
    loader();
  }, [user, refetch]);
  // console.log(price);
  const handleDelete = (name, id) => {
    swal({
      title: "Are you sure?",
      text: `You want to delete ${name}!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosHook.delete(`/api/cart?id=${id}`).then((res) => {
          console.log(res?.data);
          setRefetch(refetch + 1);
          if (res.data?.result?.deletedCount > 0) {
            swal(`${name} has been deleted!`, {
              icon: "success",
            });
          }
        });
      } else {
        swal("Item is safe!");
      }
    });
  };
  if(loading){
    return <LoadingSpinner/>
  }
  if(!price){
    return<div className=" flex justify-center items-center flex-col gap-5 w-full h-[calc(100dvh-100px)] ">
      <h1 className=" text-xl text-center font-bold">Your Cart Is Empty Please Add Something To Your Cart</h1>
      <Link href={'/chicken_and_feeds'} className="btn-primary">Add</Link >
    </div>
  }

  return (
    <main className=" my-10">
      <Heading
        subHeading={"Welcome"}
        title={"Have a look at your cart"}
      ></Heading>
     <section className=" flex items-center justify-between my-5  px-0 lg:px-5">
     <h1 className=" text-base lg:text-xl ml-8 my-5 font-bold ">
        Total Price: {price} $
      </h1>
      <Link  href={'/dashboard/payment'}>
      <button className=" btn-primary">Pay Now</button>
      </Link>
     </section>
      {/* table section  */}
      <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto px-5 ">
        <table className="w-full p-6 text-base text-left whitespace-nowrap">
          <thead>
            <tr className=" border-b border-gray-900">
              <th className="p-3 border-r border-gray-300"></th>
              <th className="p-3 border-r border-gray-300">Item Name</th>
              <th className="p-3 border-r border-gray-300">Price</th>
              <th className="p-3 border-r border-gray-300">Booking Date</th>
              <th className="p-3 border-r border-gray-300">Category</th>
              <th className="p-3 border-r border-gray-300">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="border-b text-sm ">
        
            {cart?.map((data, index) => (
              <tr className="border-b" key={index}>
                <td className="px-3 border-r border-gray-400">
                  <h3>{index + 1}</h3>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.itemName}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p className="">{data?.price}$</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.bookingDate}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.category}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.email}</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => handleDelete(data?.itemName, data?._id)}
                    className="btn text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {loading&&<div className=" flex w-full min-w-full"><SkeletonTable></SkeletonTable></div>}
		 {cart&&	<Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}></Pagination>}
    </main> 
  );
};

export default UserCart;
