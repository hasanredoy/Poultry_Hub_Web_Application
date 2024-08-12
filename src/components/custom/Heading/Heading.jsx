
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({title,subHeading}) => {
    
  return (
    <div className={` flex justify-center items-center flex-col gap-6`}>
        <p
        data-aos="fade-down"
        data-aos-duration="500"
         className=' text-primary text-base md:text-lg lg:text-xl font-semibold flex gap-2 '><FaQuoteLeft className=' text-sm'></FaQuoteLeft>{' '} {subHeading}{' '} <FaQuoteRight className={`text-sm `}></FaQuoteRight></p>
        <h1
          data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay='500'
         className={` text-center title `}
        
         >{title}</h1>
    </div>
  );
};

export default Heading;