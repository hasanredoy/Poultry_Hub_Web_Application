import Heading from "@/components/custom/Heading/Heading";
import useGetData from "@/hooks/useGetData";
import './whyChooseUs.css'

const WhyChooseUs = () => {
  // load why_choose_us data 
  const [aboutUs] = useGetData('/api/why_choose_us')
  console.log({aboutUs});
  return (
    <main className="my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      <div>
        <Heading subHeading={"Find Out"} title={'Why Choose Us..'}></Heading>
      </div>
      <section className=" flex justify-evenly">
        {aboutUs?.map(about=><div id="talkbubble" className="">

        </div>)}
      </section>
    </main>
  );
};

export default WhyChooseUs;