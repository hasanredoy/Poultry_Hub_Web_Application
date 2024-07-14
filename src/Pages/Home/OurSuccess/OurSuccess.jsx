import Heading from "@/components/custom/Heading/Heading";
import React from "react";

const OurSuccess = () => {
  return (
    <main className="my-20 h-auto mt-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <header>
        <Heading subHeading={"Our Journey"} title={"All of our Achievement"} />
      </header>
     
     <section className=" w-[100%] md:w-[100%] ml-0   md:ml-8 lg:ml-8  px-0 lg:px-5 flex flex-col md:flex-row  justify-center items-center mt-20 my-10 text-center">
        {/* our users */}
        <div className="   mx-auto md:mx-0 relative w-44 h-44 md:h-56 md:w-56">
             {/* empty */}
          <div className=" p-3 border-2 border-[#fe6702] flex-col w-44 h-44  rotate-45  ">
            <div className="bg-  bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className=" absolute top-[20%]  z-40  p-3 border-2 border-[#fe6702] flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#fe8334] h-full w-full text-black ">
              <div className=" -rotate-45 flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">66+</h3>
                <p className=" text-lg font-bold">Farmer and Client.</p>
              </div>
            </div>
          </div>
       
        </div>
        
        {/* our listed item  */}
        <div className=" my-20 md:my-0 z-40 relative mx-auto md:mx-0 w-44 h-44 md:h-56 md:w-56">
             {/* empty */}
          <div className=" absolute top-[20%] p-3 border-2 border-[#fe6702] flex-col w-44 h-44  rotate-45 ">
            <div className="bg-  bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className="  z-40  p-3 border-2 border-[#fe6702] flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#fe8334] h-full w-full text-black ">
              <div className=" -rotate-45 flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">40+</h3>
                <p className=" text-lg font-bold">Listed Item.</p>
              </div>
            </div>
          </div>
       
        </div>
      
        {/* our sales */}
        <div className=" mb-10 md:mb-0  relative mx-auto md:mx-0 w-44 h-44 md:h-56 md:w-56">
             {/* empty */}
          <div className=" p-3 border border-[#fe6702] flex-col w-44 h-44  rotate-45 ">
            <div className="bg-  bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className=" absolute top-[20%]  z-40  p-3 border-2 border-[#fe6702] flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#fa8334] h-full w-full text-black ">
              <div className=" -rotate-45  flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">100+</h3>
                <p className=" text-lg font-bold">Monthly Sales</p>
              </div>
            </div>
          </div>
       
        </div>

        
      </section>
    </main>
  );
};

export default OurSuccess;
