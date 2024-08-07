"use client";
import Heading from "@/components/custom/Heading/Heading";
import moment from "moment";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaTrashAlt } from "react-icons/fa";
// import star rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "@/services/ContextProvider";
import useGetUser from "@/hooks/useGetUser";
import useAxios from "@/hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import swal from "sweetalert";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/custom/Pagination/Pagination";

// function to load reviews count
const axiosHook = useAxios();
const loadReviews = async (email) => {
  const { data } = await axiosHook.get(`/api/count/reviews`);
  //  console.log(data);
  return data?.count;
};

const Reviews = () => {
  // get reviews
  const {
    reviews,
    refetchReview,
    setRefetchReview,
    currentPage,
    setCurrentPage,
  } = useContext(GeneralContext);
  // count state
  const [count, setCount] = useState(0);

  // handler for star rating
  const [rating, setRating] = useState(0); // Initial value
  //  get pagination func
  const [totalPage, pages] = usePagination(count, 6);

  // get user
  const user = useGetUser();
  // console.log(rating);

  // handler to post user review
  const handleReview = async (e) => {
    e.preventDefault();
    const reviewData = {
      username: user?.name,
      email: user?.email,
      image: user?.image,
      postedDate: new Date(),
      rating,
      tags: [e.target?.satisfied?.value],
      description: e.target?.description?.value,
    };
    // console.log(reviewData);
    const res = await axiosHook.post("/api/reviews", reviewData);
    // console.log(res.data);
    if (res.data?.result?.insertedId) {
      setRefetchReview(refetchReview + 1);
      toast.success("Thank you for your feedback");
    }
  };
  // handler to delete user review
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: `You want to remove your feedback!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosHook.delete(`/api/reviews?id=${id}`).then((res) => {
          if (res.data?.result?.deletedCount > 0) {
            setRefetchReview(refetchReview + 1);
            swal(`Feedback has been removed!`, {
              icon: "success",
            });
          }
        });
      } else {
        swal("Item is safe!");
      }
    });
  };

  // effect to call reviews count
  useEffect(() => {
    const loader = async () => {
      const reviewsCount = await loadReviews();
      setCount(reviewsCount);
    };
    loader();
  }, []);

  return (
    <div className=" flex flex-col mt-5 gap-5 md:flex-row">
      {/* aside for feed back form    */}
      <aside className=" w-full lg:w-[30%] ">
        {/* form div  */}
        <div className="card bg-base-200 w-full max-w-md shrink-0 ">
          <h3 className="subtitle text-center pt-2">Leave a Feedback</h3>
          <form onSubmit={handleReview} className="card-body">
            {/* subject div  */}
            <div className="form-control">
              <label className="label">
                <span className="text-sm lg:text-base font-bold">Rating*</span>
              </label>
              <div className=" ">
                <Rating
                  style={{ maxWidth: 250 }}
                  isRequired
                  value={rating}
                  onChange={setRating}
                />
              </div>
            </div>
            {/* dropdown div  */}
            <div className="form-control">
              <label className="label">
                <span className="text-sm lg:text-base font-bold">
                  Are you satisfied with our service*
                </span>
              </label>
              <select name="satisfied">
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
        {reviews.length > 0 ? (
          <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 gap-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative max-w-2xl rounded-md bg-base-100 shadow-md border-gray-300 border  p-4 sm:flex sm:space-x-6"
              >
                <div className="flex-shrink-0 rounded-full w-14  h-14 ">
                  <Image
                    src={review?.image}
                    alt="user"
                    height={50}
                    width={50}
                    className="object-cover object-center w-14 h-14  rounded-full "
                  />
                  <div className=" absolute -top-2 right-2 lg:static pt-5">
                    {review?.email == user?.email && (
                      <button
                        onClick={() => handleDelete(review?._id)}
                        title="delete"
                        className=" btn text-red-500"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex w-full flex-col space-y-3">
                  <section className=" w-full min-w-full flex justify-between">
                    <div className=" flex flex-1 flex-col gap-2 text-start ">
                      <h2 className=" text-lg lg:text-xl font-semibold">
                        {review?.username}{" "}
                        <span className=" text-base font-normal">
                          {user?.name == review?.username && "(you)"}
                        </span>
                      </h2>
                      <span className="text-sm lg:text-base text-green-600  ">
                        {moment(review?.postedDate)
                          .startOf("seconds")
                          .fromNow()}
                      </span>
                    </div>
                    <h2 className=" text-lg lg:text-2xl gap-2 font-bold flex ">
                      {review?.rating}
                      <FaStar className=" text-sm lg:text-xl font-bold text-[#fe6702]    mt-1"></FaStar>
                    </h2>
                  </section>
                  <div className="divider"></div>
                  <div className="space-y-1">
                    <p className=" flex  gap-3">
                      <FaQuoteLeft className=" text-sm "></FaQuoteLeft>
                      <span className=" flex-1"> {review?.description}</span>
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="  flex gap-5">
                    {review?.tags?.map((tag, index) => (
                      <button
                        key={index}
                        type="button"
                        className="relative px-4 py-1 overflow-hidden font-semibold rounded-full bg-primary  text-white "
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Skeleton></Skeleton>
        )}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
          totalPage={totalPage}
        />
      </section>
      <Toaster></Toaster>
    </div>
  );
};

export default Reviews;
