"use client";
import Heading from "@/components/custom/Heading/Heading";
import moment from "moment";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
const Reviews = () => {
  const reviews = [1, 1, 11, 1, 1, 1];
  return (
    <div className=" flex flex-col md:flex-row">
      {/* aside for feed back form    */}
      <aside className=" w-[30%]"></aside>
      {/* reviews section  */}
      <section className=" w-[68%] bg-gray-200">
        <Heading
          subHeading={"How We Are?"}
          title={"Hear What Our Users Says!"}
        ></Heading>
        {/* map reviews    */}
        <div className="grid grid-cols-2 gap-5">
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
