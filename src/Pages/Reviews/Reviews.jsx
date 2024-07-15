"use client";
import Heading from "@/components/custom/Heading/Heading";
import moment from "moment";
import Image from "next/image";
import { FaLocationArrow, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
// import star rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";

const Reviews = () => {
  const reviews = [1, 1, 11, 1, 1, 1];
  // handler for star rating
  const [rating, setRating] = useState(0) // Initial value

  console.log(rating);
  
  return (
    <div className=" flex flex-col gap-5 md:flex-row">
      {/* aside for feed back form    */}
      <aside className=" w-full lg:w-[30%] ">
         {/* form div  */}
         <div className="card bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className="subtitle text-center pt-2">Leave a Feedback</h3>
            <form className="card-body">
              {/* subject div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Rating*
                  </span>
                </label>
                <div className=" ">
                <Rating style={{ maxWidth: 250 }}  isRequired value={rating} onChange={setRating} />
                </div>
              </div> 
              {/* message div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Feedback*
                  </span>
                </label>
                <textarea
                  name="message"
                  className=" textarea "
                  id=""
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn flex items-center gap-2 btn-primary">
                  Leave
                </button>
              </div>
            </form>
          </div>
      </aside>
      {/* reviews section  */}
      <section className=" w-full lg:w-[68%] ">
        <Heading
          subHeading={"How We Are?"}
          title={"Hear What Our Users Says!"}
        ></Heading>
        {/* map reviews    */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="max-w-2xl rounded-md h-[335px]rounded-md bg-gray-400   p-8 sm:flex sm:space-x-6"
            >
              <div className="flex-shrink-0 rounded-full w-14  h-14 ">
                <Image
                  src={review?.image}
                  alt="user"
                  height={50}
                  width={50}
                  className="object-cover object-center w-14 h-14  rounded-full "
                />
              </div>
              <div className="flex flex-col space-y-4">
                <section className=" flex justify-between">
                  <div className=" flex flex-col gap-2 text-start ">
                    <h2 className="text-2xl font-semibold">
                      {review?.username}
                    </h2>
                    <span className="text-base text-green-600  ">
                      {moment(review?.postedTime).startOf("day").fromNow()}
                    </span>
                  </div>
                  <h2 className=" text-2xl gap-2 font-bold flex ">
                    {review?.rating}
                    <FaStar className=" text-xl font-bold text-[#fe6702]    mt-1"></FaStar>
                  </h2>
                </section>
                <div className="divider"></div>
                <div className="space-y-1">
                  <p className=" flex gap-2">
                    <FaQuoteLeft className=" text-lg "></FaQuoteLeft>
                    {review?.description}
                    <FaQuoteRight className=" text-lg "></FaQuoteRight>
                  </p>
                </div>
                <div className="divider"></div>
                <div className="  flex gap-5">
                  {review?.tags?.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      className="relative px-4 py-1 overflow-hidden font-semibold rounded-full bg-primary    -400 text-black "
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
