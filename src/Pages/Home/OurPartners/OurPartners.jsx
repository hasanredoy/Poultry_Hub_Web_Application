'use client'
import Heading from "@/components/custom/Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './ourPartner.css'

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Skeleton from "@/components/custom/Skeleton/Skeleton";

//get axios hook 
const axiosHook = useAxios()
const loadPartners=async()=>{
  const {data}=await axiosHook.get('/api/partners')
   console.log( data);
   return data?.result
}

const OurPartners = () => {
  // partner state
  const[ partners,setPartners ]=useState([])
  const[ loading,setLoading ]=useState(true)
  // console.log(partners[0]);
 useEffect(()=>{
  // loader to call partners 
  const loader = async()=>{
    const partnersData = await loadPartners()
    console.log(partnersData);
    setPartners(partnersData)
    setLoading(false)
  }
  // call loader
  loader()
 },[])
 if(loading){
  return   <div className=" grid grid-cols-1 md:grid-cols-2 my-10 justify-center md:w-[80%] mx-auto gap-10">
  <div className="flex w-full flex-col gap-4">
    <div className="skeleton h-44 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  <div className="flex w-full flex-col gap-4">
    <div className="skeleton h-44 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
</div>
 }
  return (
    <main className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <Heading
        subHeading={"Our Partners"}
        title={"Here all of our loved Partners"}
      ></Heading>
      <section className="mt-10 overflow-auto h-auto md:h-[320px] bg-base-100 ">
        
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter:true
          }}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination,Autoplay]}
          className="mySwiper"
        >
        {partners?.map((partner) => (
            <SwiperSlide>
               <div
            key={partner?._id}
            className="flex w-full min-w-[300px] relative flex-col p-3 bg-base-300 shadow rounded-lg max-h-[300px] min-h-[300px] text-start "
          >
            <div className=" px-2 lg:px-5 mb-5">
              <Image
                src={partner?.image}
                width={200}
                height={200}
                alt="partner image"
                className=" rounded-lg bg-white w-full h-28 max-h-28 min-h-28 p-6 "
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{partner?.name}</h2>
              <h6 className=" text-base">{partner?.description}</h6>
            </div>
            <div className=" flex justify-end bottom-1 absolute right-1  ">
              <Link
                title="Visit"
                className=" hover:cursor-pointer hover:bg-slate-100 p-2 rounded-full"
                href={partner?.website}
                target="_blank"
              >
                <FaLocationArrow className=" text-[#fe6702]   -500 text-2xl"></FaLocationArrow>
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
