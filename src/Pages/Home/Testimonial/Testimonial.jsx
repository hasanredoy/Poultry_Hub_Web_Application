import Heading from '@/components/custom/Heading/Heading';
import testimonial from '../../../../public/testimonial/3149085_463108-PFPNOC-400.jpg'
import Image from 'next/image';
import useGetData from '@/hooks/useGetData';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => { 
  // get reviews data 
  const [reviews] = useGetData('/api/reviews')
  console.log(reviews);
  return (
    <main className='my-20 max-w-[95%] lg:max-w-[85%] mx-auto' >
      <Heading subHeading={'Hear'}  title={'What our Client and Sellers Says '}></Heading>
      {/* container section  */}
      <section className=' flex flex-col lg:flex-row'>
        {/* image section  */}
      <section className=' w-[40%] flex-1'> 
      <Image className=" w-[400px] h-[400px]  " src={testimonial} height={400} width={400} alt="testimonial"></Image>
      </section>
      {/* review section  section  */}
        
      <section className=' flex-1 w-[60%]'>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} >
        {reviews.map(review=><div key={review._id} className="max-w-2xl text-black h-full p-8 sm:flex sm:space-x-6 bg-yellow-50 ">
	<div className="flex-shrink-0 rounded-full w-14  h-14 ">
		<Image src={review.image} alt="user" height={50} width={50} className="object-cover object-center w-14 h-14  rounded-full " />
	</div>
	<div className="flex flex-col space-y-4">
		<section className=' flex justify-between'>
    <div className=' flex flex-col gap-2 text-start '>
			<h2 className="text-2xl font-semibold">{review.name}</h2>
			<span className="text-base  ">{review?.postedTime}</span>
		</div>
    <h2 className=' text-2xl gap-2 font-bold flex '>{review.rating}<FaStar className=' text-xl font-bold text-yellow-400 mt-1'></FaStar></h2>
    </section>
    <div className="divider"></div>
		<div className="space-y-1">
			<p>{review?.description}</p>
		</div>
	</div>
</div>)}
                
                
            </Carousel>
      </section>
      </section>

    </main>
  );
};

export default Testimonial;