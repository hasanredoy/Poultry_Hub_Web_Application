import Heading from "@/components/custom/Heading/Heading";
import AI from "../../../../public/generateIdea/ai-cloud-concept-with-robot-arm.jpg"
import farm from "../../../../public/generateIdea/brown-chickens-farm.jpg"
import Image from "next/image";
import Link from "next/link";
const GenerateIdea = () => {
  return (
    <main className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <Heading subHeading={'Get a Idea'} title={"Build a Smart farm With Us"}></Heading>
      <section className=" flex flex-col md:flex-row gap-5 lg:gap-10 mt-10 mb-24">
        {/* image div  */}
        <div className=" relative flex-1   overflow-hidden ">
           {/* <Image className=" w-full lg:w-[310px] h-[200px] md:h-[230px] lg:h-[250px]    " src={AI} height={500} width={600}  alt="AI"></Image>
           <div className=" hidden lg:block w-[310px] border-2 border-yellow-200 p-1     "></div>
           <div className=" w-[310px] border-2 border-yellow-200 p-1  hidden lg:block   "></div> */}
           <Image className="" src={farm} height={400} width={400}  alt="Farm"></Image>
        </div>
        {/* text div */}
        <div className=" flex-1">
            <h1 className=" subtitle mb-5"><span className=" text-[#fe6702]   -400">20+</span> Successful Idea Generated so far </h1>
            <p>We are working along with you to manage your farm in a smarter way then anyone thought before. </p>
            <p>With a great journey with farmers we explore and learned what is the best idea for your farm. If you starting a company you can generate idea from us for free. </p>
            <p>Why your waiting for let's start building a smart farm?</p>
              <div className="mt-10">
                <Link href={'/generate_idea'} className=" btn-primary">Generate Idea</Link>
             
              </div>
        </div>
      </section>
    </main>
  );
};

export default GenerateIdea;