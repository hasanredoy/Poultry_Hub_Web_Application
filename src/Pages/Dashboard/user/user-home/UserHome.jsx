"use client";
import Image from "next/image";
import cart from "../../../../../public/dashboard_icons/shopping-cart.png";
import reviews from "../../../../../public/dashboard_icons/review.png";
import payment from "../../../../../public/dashboard_icons/credit-card.png";

// import chart
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "@/services/ContextProvider";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";

const axiosHook =useAxios()
// function to load reviews
const loadReviews = async (email) => {
  const { data } = await axiosHook.get(`/api/reviews/${email}`);
  console.log(data);
  return data?.result;
};

const paymentLoader = async (email) => {
  const { data } = await axiosHook.get(`/api/payment?email=${email}`);
   console.log(data);
  return data?.result;
};

const UserHome = () => {
  const {carts}=useContext(GeneralContext)||{carts:0}

  const [userReviews , setUserReviews]=useState([])
  const [userPayments,setUserPayments] = useState([])
  // get user stats
  const userStats = {
    cart: carts,
    reviews: userReviews?.length,
    payments: userPayments?.length,
  };


  const user = useGetUser();
  // get payments
  useEffect(()=>{ 
    const loader = async()=>{
      const payment =await paymentLoader(user?.email)
      console.log(payment);
      setUserPayments(payment)
    }
    loader()
  },[user])

  // effect to call cart
  useEffect(() => {
    const loader = async () => {
      const reviewsData = await loadReviews(user?.email);
      setUserReviews(reviewsData);
    };
    loader();
  }, [user]);

  // chart data 
  const chartData = [
    {
      name: "Carts",
      count: userStats?.cart,
    },
    {
      name: "Reviews",
      count: userStats?.reviews,
    },
    {
      name: "Payments",
      count: userStats?.payments,
    },
  ];

  return (
    <main>
      {" "}
      <h2 className=" text-2xl font-bold my-5 ml-6">
        Hi Welcome Back <span className=" text-primary">{user?.name}</span>
      </h2>
      {/* stats section  */}
      <section className="p-6 my-6  flex items-center">
        <div className="w-[80%] grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          {/* stat 1 cart */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-400 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" cart image"
                width={40}
                height={40}
                src={cart}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h1 className="text-3xl font-bold leading-none">
                {userStats?.cart}
              </h1>
              <p className="capitalize">Cart item</p>
            </div>
          </div>
          {/* stat 2 reviews  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-fuchsia-200 text-green-600">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" reviews image"
                width={40}
                height={40}
                src={reviews}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h1 className="text-3xl font-bold leading-none">
                {userStats?.reviews}
              </h1>
              <p className="capitalize">Review</p>
            </div>
          </div>
          {/* stat 3 payment  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-emerald-100 text-emerald-700">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt="payment image"
                width={40}
                height={40}
                src={payment}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h1 className="text-3xl font-bold leading-none">
                {userStats?.payments}
              </h1>
              <p className="capitalize">Payment</p>
            </div>
          </div>
        </div>
      </section>
      {/* user info section */}
      <h3 className=" my-5 text-xl font-bold text-center"> Your Activities</h3>
      {/* user order info  section */}
      <section className=" w-full flex overflow-auto justify-center">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey='name' />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" stackId="a" fill="#fe6702" />
        </BarChart>
      </section>
    </main>
  );
};

export default UserHome;
