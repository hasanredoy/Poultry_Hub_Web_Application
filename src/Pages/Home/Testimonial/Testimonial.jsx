"use client";
import Heading from "@/components/custom/Heading/Heading";
import testimonial from "../../../../public/testimonial/3149085_463108-PFPNOC-400.jpg";
import Image from "next/image";

import moment from "moment";
// import required modules
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaQuoteLeft, FaQuoteRight, FaSpinner, FaStar } from "react-icons/fa";
import Link from "next/link";
import useAxios from "@/hooks/useAxios";
import { ImSpinner9 } from "react-icons/im";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//get axios hook
const axiosHook = useAxios();
const loadReviews = async () => {
  const { data } = await axiosHook.get("/api/reviews");
  console.log(data);
  return data?.result;
};

const Testimonial = () => {
  // partner state
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(reviews[0]);
  useEffect(() => {
    // loader to call reviews
    const loader = async () => {
      const reviewsData = await loadReviews();
      console.log(reviewsData);
      setReviews(reviewsData);
      setLoading(false);
    };
    // call loader
    loader();
  }, []);
  return (
    <main className="my-20 max-w-[95%] lg:max-w-[85%] mx-auto">
      <Heading
        subHeading={"Hear"}
        title={"What our Client and Sellers Says "}
      ></Heading>
      {/* container section  */}
      <section className=" flex flex-col lg:flex-row mt-10 ">
        {/* image section  */}
        <section className=" w-full lg:w-[40%] flex-1">
          <Image
            className=" lg:w-[450px] w-full lg:h-[335px] rounded-md "
            src={testimonial}
            height={400}
            width={400}
            alt="testimonial"
          ></Image>
        </section>
        {/* review section  section  */}

        <section className=" w-full lg:w-[60%] h-full lg:h-[335px] ">
          {loading && (
            <ImSpinner9 className=" animate-spin text-2xl flex justify-center mx-auto text-center items-center h-full" />
          )}

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {loading ||
              reviews?.slice(0,3)?.map((review) => (
                <SwiperSlide key={review._id}>
                  <section className="max-w-xl mt-5 lg:mt-0 md:px-28 border lg:border-0 lg:px-0 w-full min-w-full md:w-auto lg:min-w-[575px] p-5 h-auto md:h-[335px] rounded-md  py-5  gap-3  sm:flex ">
                    <div className="flex flex-col w-full min-w-full space-y-4">
                      <section className=" flex justify-between">
                       
                        <div className=" flex flex-col gap-2 text-start ">
                           <div className="top-0 relative rounded-full w-8 md:w-14 h-8 md:h-14 ">
                          <Image
                            src={review?.image}
                            alt="user"
                            height={50}
                            width={50}
                            className="object-cover object-center w-8 md:w-14 h-8 md:h-14  rounded-full "
                          />
                        </div>
                          <h2 className="text-lg lg:text-2xl font-semibold">
                            {review?.username}
                          </h2>
                          <span className="text-sm lg:text-base text-green-600  ">
                            {moment(review?.postedDate)
                              .startOf("seconds")
                              .fromNow()}
                          </span>
                        </div>
                        <h2 className=" text-base  lg:text-2xl gap-2 font-bold flex ">
                          {review.rating}
                          <FaStar className=" text-base lg:text-xl font-bold text-[#fe6702]   -400 mt-1"></FaStar>
                        </h2>
                      </section>
                      <div className="divider"></div>
                      <div className="space-y-1">
                        <p className=" flex gap-2">
                          <FaQuoteLeft className=" text-xl "></FaQuoteLeft>
                          {review?.description}
                        </p>
                      </div>
                      <div className="divider"></div>
                      <div className="  flex gap-5">
                        {review?.tags?.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className="btn-primary "
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
};

export default Testimonial;
