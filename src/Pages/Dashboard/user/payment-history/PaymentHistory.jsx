'use client'
import Heading from "@/components/custom/Heading/Heading";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import React, {  useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const axiosHook = useAxios()

const paymentLoader = async (email) => {
  const { data } = await axiosHook.get(`/api/payment?email=${email}`);
   console.log(data);
  return data?.result;
};

const PaymentHistory = () => {
  //  get user
  const user = useGetUser()
  // get payments
  const [payments,setPayments] = useState([])
  useEffect(()=>{ 
    const loader = async()=>{
      const payment =await paymentLoader(user?.email)
      console.log(payment);
      setPayments(payment)
    }
    loader()
  },[user])
  console.log(payments);


  
if(!payments){
  return <Skeleton></Skeleton>
}
  return (
    <main className=" mt-10">
      <Heading
        subHeading={"Welcome"}
        title={"Here are all of your payments"}
      ></Heading>
      <h1 className="text-xl ml-8 my-5 font-bold ">
        Total Items: {payments?.length}
      </h1>
      {/* table section  */}
      <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
        <table className="w-full p-6 text-base text-left whitespace-nowrap">
          <thead>
            <tr className=" border-b border-gray-900">
              <th className="p-3 border-r border-gray-300"></th>
              <th className="p-3 border-r border-gray-300">Items</th>
              <th className="p-3 border-r border-gray-300">Total Price</th>
              <th className="p-3 border-r border-gray-300">Payment Date</th>
              <th className="p-3 border-r border-gray-300">TransactionId</th>
              <th className="p-3 border-r border-gray-300">Email</th> 
              <th className="p-3 border-r border-gray-300">Delivery Date</th>
              <th className="p-3 ">Status</th> 
            </tr>
          </thead>
          <tbody className="border-b text-sm ">
            {payments?.map((data, index) => (
              <tr className="border-b" key={index}>
                <td className="px-3 border-r border-gray-400">
                  <p>{index + 1}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <ul className="flex flex-col gap-1">
                    {data?.itemsName?.map((item,index) => (
                      <li className=" ml-2 list-disc" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p className="">{data?.totalPrice} $</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.paymentDate}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.transactionID}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.email}</p>
                </td>
                <td className="px-3 py-2">
              <h4 >{data?.delivery?.date}</h4>
                 
                </td>
                <td className="px-3 py-2">
              <h4 >{data?.status}</h4>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default PaymentHistory;
