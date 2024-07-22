'use client'

import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadSingleItem = async (id) => {
  const res = await axiosHook.get(`/api/all_items/${id}`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const DetailsPage = ({id}) => {
    // state for all chicken and feed
    const [singleItem, setSingleItem] = useState({});

    useEffect(() => {
      //function for call loadAllItems
      const loader = async () => {
        const data = await loadSingleItem(id);
        console.log(data);
        setSingleItem(data);
      };
      loader();
    }, []);
    console.log({singleItem});
  return (
    <section className=" relative  flex flex-row  card bg-base-200 shadow   my-20 max-w-[95%] lg:max-w-[85%] mx-auto ">
    <figure className=" flex-1">
      <Link className=" absolute left-1 top-1" href={'/chicken_and_feeds'}>
      <GoArrowLeft className=" text-2xl font-bold cursor-pointer " ></GoArrowLeft>
      </Link>
      <Image
      width={500} height={500}
        className=" w-[90%] h-[400px]"
        src={singleItem?.image}
        alt={singleItem?.name}
      />
    </figure>
    <div className="card-body flex-1">
      <h2 className="card-title">{singleItem?.name}</h2>
      <p>
        {singleItem?.description}{" "}
        
      </p>
      <h5 className=" my-3 text-lg ">
        Listed By:{" "}
        <span className=" font-bold">{singleItem?.seller}</span>
      </h5>

      <div className="divider"></div>
      <div className=" flex justify-between my-1 ">
        <h5 className=" flex-1">
          Price :{" "}
          <span className="  text-primary font-bold">{singleItem?.price} $ </span>
        </h5>
        <h5 className=" flex justify-start ml-40 flex-1 ">
          {singleItem.category == "Eggs" ? "Quantity" : "Weight"} :{" "}
          <span className=" text-primary font-bold">{singleItem?.weight}</span>
        </h5>
      </div>
      <div className=" flex justify-between my-1 ">
        <h5 className="flex flex-1 singleItem-center gap-2">
          Ratings :{" "}
          <span className=" text-primary font-bold flex singleItem-center gap-2">
            {singleItem?.rating}
            <FaStar></FaStar>
          </span>
        </h5>
        <h5 className=" flex justify-start ml-40 flex-1 ">
          Total Ratings :{" "}
          <span className=" text-primary font-bold">
            {singleItem?.totalRating}
          </span>
        </h5>
      </div>
      <div className=" flex justify-between my-1 ">
        <h5 className="  flex-1 ">
          Listed in :{" "}
          <span className=" text-primary font-bold">
            {singleItem?.listingDate}
          </span>
        </h5>
        <h5 className=" flex justify-start ml-40 flex-1 ">
          Valid Till :{" "}
          <span className=" text-primary font-bold">{singleItem?.expireDate}</span>
        </h5>
      </div>
      <div className=" flex justify-between my-1 ">
        <h5 className="flex-1 ">
          Total Sell :{" "}
          <span className=" text-primary font-bold">{singleItem?.totalSell}</span>
        </h5>
      </div>
      <div className="card-actions justify-center ">
        <button className=" btn-card border-b-4   border-gray-300">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
  );
};

export default DetailsPage;