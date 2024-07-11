import Heading from '@/components/custom/Heading/Heading';
import React from 'react';
import testimonial from '../../../../public/testimonial/3149085_463108-PFPNOC-400.jpg'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import useFetchData from '@/hooks/useFetchData';


const Testimonial = () => {

  const [data] = useFetchData('/api/reviews')
  console.log(data);
  return (
    <main>
      <Heading subHeading={'Hear'}  title={'What our Client and Sellers Says '}></Heading>
      {/* image section  */}
      <section> 
      <Image className=" w-full   " src={testimonial} height={400} width={400} alt="testimonial"></Image>
      </section>
      {/* review section  section  */}
        
      <section>
        
      </section>

    </main>
  );
};

export default Testimonial;