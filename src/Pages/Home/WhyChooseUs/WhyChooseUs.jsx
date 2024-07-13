import Heading from "@/components/custom/Heading/Heading";
import useGetData from "@/hooks/useGetData";
import './whyChooseUs.css'
import Image from "next/image";

const WhyChooseUs = () => {
  // load why_choose_us data 
  const [aboutUs] = useGetData('/api/why_choose_us')
  console.log({aboutUs});
  return (
    <main className="my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      <div>
        <Heading subHeading={"Find Out"} title={'Why Choose Us..'}></Heading>
      </div>
      <section className=" mt-10 flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-5">
        {aboutUs?.map((about,index)=><div  key={about?._id} id={'talkbubble'} >
            <div className={`  p-4 gap-2 flex-col flex justify-center items-center `}>
            <Image src={about?.icon} alt="about us " height={50} width={50}></Image>
             <div className=" text-center text-black">
              <h3 className=" subtitle">{about?.title}</h3>
              <h6>{about?.description.slice(0,40)}</h6>
             </div>
            </div>
        </div>)}
      </section>
    </main>
  );
};

export default WhyChooseUs;