'use client'
import Heading from "@/components/custom/Heading/Heading";
import PostOnCart from "@/components/custom/postOnCart/PostOnCart";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import Link from "next/link";
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
  const [features , setFeatured] = useState([])
  const [loading , setLoading] = useState(true)

  // effect to call featured data 
  useEffect(()=>{
    const loader =async()=>{
      const featureData =await loadFeatured()
      setFeatured(featureData)
      setLoading(false)
    }
    loader()
  },[])
  return (

    <section className=" my-20 py-3 max-w-[95%]  lg:max-w-[85%] mx-auto ">
          <Heading subHeading={'Have a look'} title={"Henpicked Favorites!!"}></Heading>
          {loading&&<Skeleton></Skeleton>}
        {/* cards section  */}
        <section className=" grid mt-10 grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {loading||features?.map((data)=> <div
         
            key={data?._id}
            className="card   shadow-lg px-2 bg-base-200  hover:scale-100 lg:hover:scale-100 border   hover:border-0 lg:hover:border-2  hover:border-orange-400"
          >
            <h2 className="font-bold text-center text-base md:text-lg lg:text-xl mt-2">
              {data?.name}
            
            </h2>
            <div className="divider"></div>
            <figure className="  px-10 lg:px-20 w-full">
              <img className=" h-[200px] w-full" src={data?.image} alt={data?.name}  />
            </figure>
            <div className="card-body">
              <p >Seller: <span className=" font-bold"> {data?.seller}</span></p>
              <p className=" text-sm">
                {data?.description?.slice(0, 100)}{" "}
                <Link href={`/chicken_and_feeds/${data?._id}`} className=" pl-2 font-bold text-blue-700">
                  Read More...
                </Link>
              </p>
              <div className=" w-full border "></div>
              <h4 className=" flex  items-center ">
                Price : <span className=" font-bold">{data?.price} $</span>{" "}
              </h4>
              <div className="card-actions justify-between mt-2">
               <PostOnCart cart={data}></PostOnCart>
                <Link href={`/chicken_and_feeds/${data?._id}`}>
                  <button className=" btn-outline">View Details</button>
                </Link>
              </div>
            </div>
          </div>)}
        </section>
        <Link className=" flex justify-center mt-10" href={'/chickens_and_feeds'}>
          <button className=" btn-primary">See All</button>
        </Link>
    </section>
  );
};

export default Featured;