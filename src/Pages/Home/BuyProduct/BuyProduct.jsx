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
    <section className={` my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto `}>
      <Heading subHeading={'Welcome To Our Farm'} title={"Buy Fresh Organic Chicken , Eggs and Natural Feed"}></Heading>
      <section className=' flex gap-10 flex-col lg:flex-row mt-10 '>
        {/* img div  */}
        <div className=' flex-1 grid grid-cols-2 gap-5 relative '>
           <Image
            src={farmer} className=' w-full  bg-white h-[200px]' width={500} height={500} alt=' farmer banner'></Image>
           <Image
            src={farmer2} className=' w-full  bg-white h-[200px]' width={500} height={500} alt=' farmer banner2'></Image>
           <Image
            src={organic} className='absolute w-[100px] h-[100px] top-[38%] left-[43%]' width={200} height={200} alt=' farmer banner2'></Image>
           <Image
            src={farmer3} className=' w-full  bg-white h-[200px]' width={500} height={500} alt=' farmer banner3'></Image>
           <Image
            src={feed} className=' w-full  bg-white h-[200px]' width={500} height={100} alt=' feed'></Image>
        </div>
        {/* text div  */}
       <div
       className='flex-1 text-neutral-800'
       >
         
         <div className=' border-l-8 border-yellow-600 bg-yellow-100 shadow-lg p-5 rounded-lg'>
          <h3 className=' subtitle'> 100 % organic eggs and chicken </h3>
          <p>All of our chickens and eggs are came from neutral poultry farm. You can trust our sellers  100 % because we ensure the neutrality of our seller before we make theme seller.   </p>
         </div>
         <div className=' border-l-8 bg-yellow-200 border-yellow-600 shadow-lg p-5 rounded-lg mt-5'>
          <h3 className=' subtitle'>Chicken feed from nature base factory  </h3>
          <p> You can buy chicken feed from our store those feeds are came from nature base factory. We bet our feeds are best.   </p>
         </div>
         <div className=' border-l-8 bg-yellow-300  border-yellow-600 shadow-lg p-5 rounded-lg mt-5'>
          <h3 className=' subtitle'>Best in quality </h3>
          <p>We ensure quality and quantity of our product. All of our farmer have pass a complex test before listing any product in our store.  </p>
         </div>
       </div>
      </section>
    </section>
  );
};

export default BuyProduct;