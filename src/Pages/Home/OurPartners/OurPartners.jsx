import Heading from "@/components/custom/Heading/Heading";
import useGetData from "@/hooks/useGetData";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const OurPartners = () => {
  const partners = useGetData("/api/partners");
  // console.log(partners[0]);
  return (
    <main className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <Heading
        subHeading={"Our Partners"}
        title={"Here all of our loved Partners"}
      ></Heading>
      <section className=" grid grid-cols-2 gap-5 lg:grid-cols-3 mt-10 ">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
        {partners[0]?.map((partner) => (
            <SwiperSlide>
               <div
            key={partner?._id}
            className="flex relative flex-col p-3 bg-base-300 shadow rounded-lg "
          >
            <div className=" px-5 mb-5">
              <Image
                src={partner?.image}
                width={200}
                height={200}
                alt="partner image"
                className=" rounded-lg bg-white w-full h-28 max-h-28 min-h-28 "
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{partner?.name}</h2>
              <h6>{partner?.description}</h6>
            </div>
            <div className=" flex justify-end bottom-1 absolute right-1  ">
              <Link
                title="Visit"
                className=" hover:cursor-pointer hover:bg-slate-100 p-2 rounded-full"
                href={partner?.website}
              >
                <FaLocationArrow className=" text-yellow-500 text-2xl"></FaLocationArrow>
              </Link>
            </div>
          </div></SwiperSlide>
        ))}
        </Swiper>
      </section>
    </main>
  );
};

export default OurPartners;
