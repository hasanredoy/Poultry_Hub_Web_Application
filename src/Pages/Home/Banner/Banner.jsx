"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import banner css
import "./banner.css";

const Banner = () => {
  return (
    <header className=" p-0 m-0 ">
      {/* text div 
      <div className=' absolute top-4'>
        <h1>Smart Farm Management & Made Sales Easy</h1>
      </div> */}
      {/* carousel div  */}
      <div className=" w-full min-h-screen text-white">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper min-h-screen"
        >
          {/* slide 1  */}
          <SwiperSlide>
            <div
              className="hero min-h-screen bg-cover"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/prhSkdzh/pexels-alexasfotos-2255459.jpg)",
              }}
            >
              <div className="hero-overlay bg-green-800 bg-opacity-50"></div>

              <div className="hero-content   text-center">
                <div className="max-w-[100%] md:max-w-[80%] p-5 lg:max-w-xl rounded-md bg-black bg-opacity-20">
                  <h1 className="mb-5 title font-black">
                    Get <span className="text-primary">Fresh </span>
                    Chickens & Feed
                  </h1>
                  <p className="mb-5 description">
                  We take care of yor health buy fresh chickens and feed directly from trusted farms and suppliers. Enjoy peace of mind knowing your farm is equipped with the freshest products available
                  </p>
                  <button className=" btn-primary">Buy NoW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slide 2  */}
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/FHj221q0/highquality-chicken-farm-committed-superior-poultry-products.jpg)",
              }}
            >
              <div className="hero-overlay bg-green-600 bg-opacity-40"></div>
              <div className="hero-content   text-center">
                <div className="max-w-[100%] md:max-w-[80%] p-5 rounded-md lg:max-w-xl bg-black bg-opacity-30">
                  <h1 className="mb-5 title font-black">
                    <span className="text-primary">Smart Farm</span> Management{" "}
                    {/* <div className=" lg:mt-2 "></div> */}
                     With Creative <span className="text-primary"> AI</span>
                  </h1>
                  <p className="mb-5 description">
                    Simplify your farm operations and boost sales with our
                    comprehensive tools. Efficiently manage livestock,
                    inventory, tasks, and sell chickens and feed.
                  </p>
                  <button className=" btn-primary">Generate Idea</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/Y2T27GXP/pexels-italo-melo-248867-2446695.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-30 bg-green-600"></div>

              <div className="hero-content   text-center">
                <div className="max-w-[100%] md:max-w-[80%] p-5 lg:max-w-xl bg-black bg-opacity-30 rounded-md">
                  <h1 className="mb-5 title font-black">
                    <span className="text-primary">Profitable </span>
                    Sales for {" "}
                    {/* <div className=" lg:mt-2 "></div> */}
                    Chickens & Feed
                  </h1>
                  <p className="mb-5 description">
                    We respect your hard work, you can sale your chickens and
                    feed for best price in our website. We ensure safety of your
                    sales.
                  </p>
                  <button className=" btn-primary">Start Selling</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default Banner;
