'use client'
import Heading from '@/components/custom/Heading/Heading';
import React, { useEffect, useState } from 'react';
import farmer from "../../../../public/farmer/male-farmer-holding-egg-from-his-farm.jpg"
import farmer2 from "../../../../public/farmer/young-farmer-taking-care-his-business.jpg"
import farmer3 from "../../../../public/farmer/photorealistic-scene-poultry-farm-with-people-chickens.jpg"
import feed from "../../../../public/farmer/CHICKENGRAINMIX_CORNFARM-X_0803729d-8bb9-4f49-b2d1-6ec930b2a8d7_1500x1500.webp"
import organic from "../../../../public/farmer/organic_5167647.png"
import Image from 'next/image';



const BuyProduct = () => {
  // get current theme from use theme hook 
  // const [theme] = useTheme()


// console.log(theme);
  return (
 <main>
     <section className={` my-20 py-3 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto `}>
      <Heading subHeading={'Welcome To Our Farm'} title={"Buy Fresh Organic Chicken , Eggs and Natural Feed"}></Heading>
      <section className=' flex gap-8 md:gap-4 lg:gap-10 flex-col md:flex-row mt-10 '>
        {/* img div  */}
       <div className='flex-1 '>
       <div className=' z-40 grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-6 relative '>
           <div>
            
           <Image
            src={farmer} className=' w-full  lg:bg-white h-full lg:h-[222px]' width={500} height={600} alt=' farmer banner'></Image>
           </div>
           <Image
            src={farmer2} className=' w-full  hidden lg:block  bg-white h-[222px]' width={500} height={500} alt=' farmer banner2'></Image>
           <Image
            src={organic} className='absolute lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] top-0 lg:top-[38%] right-4 left-auto lg:right-auto lg:left-[41%]' width={200} height={200} alt=' farmer banner2'></Image>
           <Image
            src={farmer3} className=' w-full hidden lg:block  bg-white h-[222px]' width={500} height={500} alt=' farmer banner3'></Image>
           <Image
            src={feed} className=' w-full  hidden lg:block  bg-white h-[222px]' width={500} height={100} alt=' feed'></Image>
        </div>
       </div>
        {/* text div  */}
       <div
       className='flex-1 '
       >
         
         <div className=' bg-base-200 shadow shadow-gray-400  border-l-8 border-[#fe6702]   p-5 rounded-lg'>
          <h3 className=' subtitle'> 100 % organic eggs and chicken </h3>
          <p>All of our chickens and eggs are came from neutral poultry farm. You can trust our sellers  100 % because we ensure the neutrality of our seller before we make theme seller.   </p>
         </div>
         <div className=' bg-base-200 shadow shadow-gray-400  border-l-8  border-[#fe6702]   p-5 rounded-lg mt-4'>
          <h3 className=' subtitle'>Chicken feed from nature base factory  </h3>
          <p> You can buy chicken feed from our store those feeds are came from nature base factory. We bet our feeds are best.   </p>
         </div>
         <div className=' bg-base-200 shadow shadow-gray-400  hidden lg:block border-l-8 bg- border-[#fe6702] p-5 rounded-lg mt-4'>
          <h3 className=' subtitle'>Best in quality </h3>
          <p>We ensure quality and quantity of our product. All of our farmer have pass a complex test before listing any product in our store.  </p>
         </div>
       </div>
      </section>
    <div className=' text-center mt-8'>
    <button className=' mx-auto btn-primary'>Buy Now</button>

    </div>
    </section>

 </main>
  );
};

export default BuyProduct;