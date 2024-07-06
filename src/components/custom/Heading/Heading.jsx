import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Heading = ({title,subHeading}) => {
  return (
    <div className=' flex justify-center items-center flex-col gap-6'>
        <p className=' text-[#d9b902] text-base md:text-lg lg:text-xl font-semibold flex gap-2 '><FaQuoteLeft className=' text-sm'></FaQuoteLeft>{' '} {subHeading}{' '} <FaQuoteRight className=' text-sm'></FaQuoteRight></p>
        <h1 className='title'>{title}</h1>
    </div>
  );
};

export default Heading;