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
              delay: 3000,
              disableOnInteraction: false,
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
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.postimg.cc/prhSkdzh/pexels-alexasfotos-2255459.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content   text-center">
                  <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">Smart Farm Management &
<div className=" mt-4"></div>
                       Made Sales Easy</h1>
                    <p className="mb-5">
                    Simplify your farm operations and boost sales with our comprehensive tools. Efficiently manage livestock, inventory, tasks, and sell chickens and feed.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.postimg.cc/Y2T27GXP/pexels-italo-melo-248867-2446695.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content   text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide 3  */}
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.postimg.cc/FHj221q0/highquality-chicken-farm-committed-superior-poultry-products.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content   text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
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
