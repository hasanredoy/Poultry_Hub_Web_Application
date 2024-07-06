'use client'
import Heading from '@/components/custom/Heading/Heading';
import { useTheme } from '@emotion/react';
import React from 'react';

const BuyProduct = () => {
  const {theme} = useTheme()
console.log(theme);
  return (
    <div className=' my-20'>
      <Heading subHeading={'Welcome To Our Farm'} title={"Buy Fresh Organic Chicken , Eggs and Natural Feed"}></Heading>
    </div>
  );
};

export default BuyProduct;