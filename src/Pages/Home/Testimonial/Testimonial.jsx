import Heading from '@/components/custom/Heading/Heading';
import testimonial from '../../../../public/testimonial/3149085_463108-PFPNOC-400.jpg'
import Image from 'next/image';
import useGetData from '@/hooks/useGetData';

 import moment from "moment"
// import required modules
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonial = () => { 
  // get reviews data 
  const [reviews] = useGetData('/api/reviews')
  console.log(reviews);
  return (
    <main className='my-20 max-w-[95%] lg:max-w-[85%] mx-auto' >
      <Heading subHeading={'Hear'}  title={'What our Client and Sellers Says '}></Heading>
      {/* container section  */}
      <section className=' flex flex-col lg:flex-row mt-10 '>
        {/* image section  */}
      <section className=' w-[40%] flex-1'> 
      <Image className=" w-[400px] h-[335px] rounded-md " src={testimonial} height={400} width={400} alt="testimonial"></Image>
      </section>
      {/* review section  section  */}
        
      <section className=' w-[60%] h-[335px] shadow-lg shadow-gray-400'>
      <Carousel className=' ' showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay >
        {reviews.map(review=><div key={review._id} className="max-w-2xl h-[335px] text-black rounded-md   p-8 sm:flex sm:space-x-6">
	<div className="flex-shrink-0 rounded-full w-14  h-14 ">
		<Image src={review.image} alt="user" height={50} width={50} className="object-cover object-center w-14 h-14  rounded-full " />
	</div>
	<div className="flex flex-col space-y-4">
		<section className=' flex justify-between'>
    <div className=' flex flex-col gap-2 text-start '>
			<h2 className="text-2xl font-semibold">{review.name}</h2>
			<span className="text-base text-green-600  ">{moment(review?.postedTime).startOf('day').fromNow()}</span>
		</div>
    <h2 className=' text-2xl gap-2 font-bold flex '>{review.rating}<FaStar className=' text-xl font-bold text-yellow-400 mt-1'></FaStar></h2>
    </section>
    <div className="divider"></div>
		<div className="space-y-1">
			<p className=' flex gap-2'><FaQuoteLeft className=' text-2xl '></FaQuoteLeft>{review?.description}<FaQuoteRight className=' text-2xl '></FaQuoteRight></p>
		</div>
    <div className="divider"></div>
    <div className='  flex justify-start'>
    <button type="button" className="relative px-4 py-1 overflow-hidden font-semibold rounded-full bg-orange-200 ">#Customer Satisfied
	
</button>
  <button type="button" className="relative rounded-full px-4 py-1 ml-4 overflow-hidden font-semibold  bg-orange-200 text-gray-900">#Best Product Quality

</button>
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