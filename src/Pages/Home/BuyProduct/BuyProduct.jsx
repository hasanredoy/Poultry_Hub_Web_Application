'use client'
import Heading from '@/components/custom/Heading/Heading';
import React from 'react';
import farmer from "../../../../public/farmer/male-farmer-holding-egg-from-his-farm.jpg"
import Image from 'next/image';
import useTheme from '@/hooks/useTheme';

const BuyProduct = () => {
  // get current theme from use theme hook 
  const [theme] = useTheme()
// console.log(theme);
  return (
    <section className={` my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ${theme=="light"?"text-black":'text-white'}`}>
      <Heading subHeading={'Welcome To Our Farm'} title={"Buy Fresh Organic Chicken , Eggs and Natural Feed"}></Heading>
      <section className=' flex gap-10 flex-col lg:flex-row mt-5 '>
        {/* img div  */}
        <div className=' flex-1'>
           <Image
            src={farmer} width={500} height={500} alt=' farmer banner'></Image>
        </div>
        {/* text div  */}
       <div
       className='flex-1'
       >
         <div className=' bg-base-300 shadow-lg p-5 rounded-lg'>
          <h3 className=' subtitle'> 100 % organic eggs and chicken </h3>
          <p>All of our chickens , eggs are came from neutral poultry farm. You can trust our sellers  100 % because we ensure the neutrality of our seller before we make theme seller.   </p>
         </div>
       </div>
      </section>
    </section>
  );
};

export default BuyProduct;