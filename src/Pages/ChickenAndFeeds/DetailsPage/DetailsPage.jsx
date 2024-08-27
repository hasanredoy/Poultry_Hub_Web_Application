"use client";

import useAxios from "@/hooks/useAxios";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {FaCalendar, FaChartLine, FaRegCalendarPlus, FaRegCalendarTimes, FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";
import PostOnCart from "@/components/custom/postOnCart/PostOnCart";
import { MdOutlineReviews } from "react-icons/md";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadSingleItem = async (id) => {
  const res = await axiosHook.get(`/api/all_items/${id}`);
  // //console.log(res?.data?.result);
  return res?.data?.result;
};
const DetailsPage = ({ id }) => {
  // state for all chicken and feed
  const [singleItem, setSingleItem] = useState({});
  // handler for star rating
  const [rating, setRating] = useState(0); // Initial value
  // handler to refetch single while rating
  const [refetch , setRefetch]=useState(false)
  const handleRating = () => {
    axiosHook.patch(`/api/all_items/${id}`).then((res) => {
      //console.log(res.data);
      if(res.data.result.modifiedCount>0){
        toast('Thank you for your opinion')
        setRefetch(!refetch)
      }
    });
  };
  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadSingleItem(id);
      //console.log(data);
      setSingleItem(data);
    };
    loader();
  }, [refetch]);

  //console.log({ singleItem });
  return (
    <section className=" relative  flex flex-col md:flex-row bg-warning bg-opacity-5 shadow   my-20 max-w-[95%] lg:max-w-[85%] mx-auto ">
      <figure className=" flex-1 flex justify-center  mt-10">
        <Link className=" absolute left-1 top-1" href={"/chicken_and_feeds"}>
          <GoArrowLeft className=" text-2xl font-bold cursor-pointer "></GoArrowLeft>
        </Link>
        <Image
          width={500}
          height={500}
          className=" w-full lg:w-[90%] h-auto lg:h-[400px] rounded-md"
          src={singleItem?.image}
          alt={singleItem?.name}
        />
      </figure>
      <div className=" p-2 md:p-4 md:pt-8 flex-1">
        <h2 className="text-xl font-bold">{singleItem?.name}</h2>
        <p className=" text-sm lg:text-base">{singleItem?.description} </p>
        <h5 className=" my-3 text-base md:text-lg ">
          Listed By: <span className=" font-bold">{singleItem?.seller}</span>
        </h5>

        <div className="divider"></div>
        <div className=" flex justify-between my-1 ">
          <h5 className=" flex-1 text-xs lg:text-base">
            Price :{" "}
            <span className="    font-bold">
              {singleItem?.price} ${" "}
            </span>
          </h5>
          <h5 className=" flex gap-2 justify-start  md:ml-8 text-xs lg:text-base  lg:ml-14 xl:ml-40 flex-1 ">
            {singleItem?.category == "Eggs" ? "Quantity" : "Weight"} :{" "}
            <span className="   font-bold">
              {singleItem?.weight}
            </span>
          </h5>
        </div>
        <div className=" flex justify-between my-1 ">
          <h5 className="flex flex-1 items-center gap-2 text-xs lg:text-base">
            Ratings :{" "}
            <span className="   font-bold flex single items-center gap-2">
              {singleItem?.rating}
              <FaStar className=" pb-1"></FaStar>
            </span>
          </h5>
          <h5 className=" flex gap-2 justify-start md:ml-8 text-xs lg:text-base  lg:ml-14 xl:ml-40 flex-1 ">
            Total Ratings :{" "}
            <span className="   gap-2 flex justify-center items-center font-bold">
              {singleItem?.totalRating} 
              <MdOutlineReviews className=" "></MdOutlineReviews>
            </span>
          </h5>
        </div>
        <div className=" flex justify-between my-1 ">
          <h5 className="  flex-1 flex gap-1  text-xs lg:text-base">
            Listed in :{" "}
            <span className=" gap-2 flex justify-center items-center font-bold">
              {singleItem?.listingDate}
              <FaRegCalendarPlus></FaRegCalendarPlus>
            </span>
          </h5>
          <h5 className=" flex gap-2 justify-start md:ml-8 text-xs lg:text-base  lg:ml-14 xl:ml-40 flex-1 ">
            Valid Till :{" "}
            <span className="  gap-2 flex justify-center items-center font-bold ">
              {singleItem?.expireDate}
              <FaRegCalendarTimes></FaRegCalendarTimes>
            </span>
          </h5>
        </div>
        <div className=" flex justify-between my-1 ">
          <h5 className="flex-1 flex gap-2 text-xs lg:text-base ">
            Total Sell :{" "}
            <span className="gap-2 flex justify-center items-center font-bold">
              {singleItem?.totalSell}
              <FaChartLine></FaChartLine>
            </span>
          </h5>
        </div>
        <div className="card-actions justify-center ">
          <PostOnCart cart={singleItem} ></PostOnCart>
        </div>
        <div className="divider"></div>
        <div
          onBlur={handleRating}
          className=" my-5  flex flex-col gap-3 items-center justify-center w-full "
        >
          <h3 className=" text-lg font-bold">
            What is your opinion on this product?{" "}
          </h3>

          <Rating
            style={{ maxWidth: 250 }}
            isRequired
            value={rating}
            onChange={setRating}
          />
          <h4 className=" text-lg font-semibold">
            {rating > 0 && rating < 3 && (
              <span className="text-red-600">Not Happy</span>
            )}
            {rating == 3 && <span className="text-orange-500 ">Average</span>}
            {rating > 3 && <span className="text-green-600">Happy</span>}
          </h4>
        </div>
      </div>
      <Toaster/>
    </section>
  );
};

export default DetailsPage;
