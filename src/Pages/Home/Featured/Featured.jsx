'use client'
import Heading from "@/components/custom/Heading/Heading";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

// get axios url from axios hook
const axiosURL = useAxios();
// func for load featured data
const loadFeatured = async () => {
  const res = await axiosURL.get("/api/featured");
   console.log(res);
  return res.data?.result;
};

const Featured = () => {
  // featured state
  const [featured , setFeatured] = useState()

  // effect to call featured data 
  useEffect(()=>{
    const loader =async()=>{
      const data =await loadFeatured()
     console.log(data);
      setFeatured(data)
    }
    loader()
  },[])
  return (

    <section className=" my-20 py-3 max-w-[95%]  lg:max-w-[85%] mx-auto ">
          <Heading subHeading={'Have a look'} title={"Some of our featured items.."}></Heading>
        {/* cards section  */}
        
    </section>
  );
};

export default Featured;