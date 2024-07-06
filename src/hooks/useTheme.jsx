'use client'
import  { useEffect, useState } from 'react';

const useTheme = () => {
    // theme handler
const [theme , setTheme]=useState('light')

//check local storage and set the local storage value in theme state
useEffect(()=>{
  const currentTheme= localStorage.getItem('theme') 
  if(currentTheme){
  setTheme(currentTheme)
  document.documentElement.setAttribute('data-theme',currentTheme)
  }
},[])

// rturn current theme and theme handler
  return [theme]
};

export default useTheme;