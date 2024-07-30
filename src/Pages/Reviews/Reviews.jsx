"use client";
import Heading from "@/components/custom/Heading/Heading";
import moment from "moment";
import Image from "next/image";
import { FaChessKing, FaLocationArrow, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
// import star rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useContext, useState } from "react";
import { GeneralContext } from "@/services/ContextProvider";
import useGetUser from "@/hooks/useGetUser";
import useAxios from "@/hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";

const Reviews = () => {
  // get reviews 
  const {reviews} = useContext(GeneralContext)
  console.log(reviews);
  // handler for star rating
  const [rating, setRating] = useState(0) // Initial value
// get user
  const user = useGetUser()
  console.log(rating);
const axiosHook = useAxios()
  const handleReview =async(e)=>{
   e.preventDefault()
    const reviewData ={
      username:user?.name,
      email:user?.email,
      image:user?.image,
      postedDate:new Date(),
      rating,
      tags:[e.target?.satisfied?.value],
      description:e.target?.description?.value
    }
    console.log(reviewData);
    const res = await axiosHook.post('/api/reviews',reviewData)
    console.log(res.data);
    if(res.data?.result?.insertedId){
      toast.success('Thank you for your feedback')
    }
  }
  
  return (
    <div className=" flex flex-col gap-5 md:flex-row">
      {/* aside for feed back form    */}
      <aside className=" w-full lg:w-[30%] ">
         {/* form div  */}
         <div className="card bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className="subtitle text-center pt-2">Leave a Feedback</h3>
            <form onSubmit={handleReview} className="card-body">
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
              {/* dropdown div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Are you satisfied with our service*
                  </span>
                </label>
                <select name="satisfied" >
                  <option value="satisfied">Yes</option>
                  <option value="Not Satisfied">No</option>
                  </select>
              </div>
              {/* message div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Feedback*
                  </span>
                </label>
                <textarea
                  name="description"
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
              className="max-w-2xl h-[300px] rounded-md bg-base-100 border-gray-400 border  p-8 sm:flex sm:space-x-6"
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
                      {moment(review?.postedDate).startOf("day").fromNow()}
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
      <Toaster></Toaster>
    </div>
  );
};

export default Reviews;
