'use client'
import Heading from "@/components/custom/Heading/Heading";
import "./whyChooseUs.css";
import Image from "next/image";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import AOS from 'aos';
import 'aos/dist/aos.css';



// get axios url from axios hook
const axiosURL = useAxios();
// func for load about us
const loadAboutUs = async () => {
  const res = await axiosURL.get("/api/why_choose_us");

  return res.data?.result;
};

const WhyChooseUs = () => {
  // state for about us data  
  const [aboutUs, setAboutUs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
     AOS.init();
  },[])



  useEffect(() => {
    //load about us data
    const funcForLoadAbout = async () => {
      const loadedData = await loadAboutUs();
      // setAboutUs loaded data
      setAboutUs(loadedData);
      setLoading(false)
    };
    // call funcForLoadAbout
    funcForLoadAbout();
  }, []);
//console.log(aboutUs);
  return (
    <main className="my-28 max-w-[90%] overflow-hidden lg:max-w-[85%] mx-auto">
      <div>
        <Heading subHeading={"Find Out"} title={"Why Choose Us.."}></Heading>
      </div>
      {loading&&<Skeleton/>}
      <section className=" mt-10 flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-5">
        {loading||aboutUs?.map((about, index) => (
          <div
           data-aos="zoom-in"
             data-aos-duration="1500"
           key={about?._id} id={"talkbubble"}>
            <div
              className={`  p-4 gap-2 flex-col flex justify-center items-center `}
            >
              <Image
                src={about?.icon}
                alt="about us "
                height={50}
                width={50}
              ></Image>
              <div className=" text-center text-black">
                <h3 className=" subtitle">{about?.title}</h3>
                <h6>{about?.description.slice(0, 40)}</h6>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WhyChooseUs;
