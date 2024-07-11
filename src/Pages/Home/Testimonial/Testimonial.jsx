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


const Testimonial = () => { 
  // get reviews data 
  const [reviews] = useGetData('/api/reviews')
  console.log(reviews);
  return (
    <main className='my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto' >
      <Heading subHeading={'Hear'}  title={'What our Client and Sellers Says '}></Heading>
      {/* container section  */}
      <section className=' flex gap-20 flex-col lg:flex-row'>
        {/* image section  */}
      <section className=' flex-1'> 
      <Image className=" w-full   " src={testimonial} height={400} width={400} alt="testimonial"></Image>
      </section>
      {/* review section  section  */}
        
      <section className=' flex-1'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews?.map(review=><SwiperSlide>Slide 1</SwiperSlide>

        )}
        
      </Swiper>
      </section>
      </section>

    </main>
  );
};

export default Testimonial;