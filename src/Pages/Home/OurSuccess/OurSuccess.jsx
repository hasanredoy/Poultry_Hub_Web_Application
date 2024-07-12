import Heading from "@/components/custom/Heading/Heading";
import React from "react";

const OurSuccess = () => {
  return (
    <main className="my-20 mt-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <header>
        <Heading subHeading={"Our Journey"} title={"All of our Achievement"} />
      </header>
     <div className=" w-full flex justify-center">
     <section className=" w-[50%]  md:w-[100%] ml-0  md:ml-14 lg:ml-14 mx-auto px-0 lg:px-5 flex justify-center items-center mt-20 my-10 text-center">
        {/* our users */}
        <div className=" relative h-56 w-56">
             {/* empty */}
          <div className=" p-3 border-2 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#f8ea9c] bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className=" absolute top-[20%]  z-40  p-3 border-2 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#e2c001] h-full w-full text-black ">
              <div className=" -rotate-45 flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">66+</h3>
                <p className=" text-lg font-bold">Farmer and Client.</p>
              </div>
            </div>
          </div>
       
        </div>
            {/* empty */}
            <div className=" hidden lg:block p-3 border border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className=" bg-opacity-50 h-full w-full text-black "></div>
          </div>
        {/* our listed item  */}
        <div className=" z-40 relative h-56 w-56">
             {/* empty */}
          <div className=" absolute top-[20%] p-3 border-2 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#f8ea9c] bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className="  z-40  p-3 border-2 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#e2c001] h-full w-full text-black ">
              <div className=" -rotate-45 flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">40+</h3>
                <p className=" text-lg font-bold">Listed Item.</p>
              </div>
            </div>
          </div>
       
        </div>
            {/* empty */}
            <div className=" hidden lg:block p-3 border z-10 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className=" bg-opacity-50 h-full w-full text-black "></div>
          </div>
        {/* our sales */}
        <div className="  relative h-56 w-56">
             {/* empty */}
          <div className=" p-3 border border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#f8ea9c] bg-opacity-50 h-full w-full text-black "></div>
          </div>
          
          <div className=" absolute top-[20%]  z-40  p-3 border-2 border-yellow-700 flex-col w-44 h-44  rotate-45 ">
            <div className="bg-[#e2c001] h-full w-full text-black ">
              <div className=" -rotate-45  flex pt-10 flex-col w-full h-full ">
                <h3 className=" text-xl font-bold ">100+</h3>
                <p className=" text-lg font-bold">Monthly Sales</p>
              </div>
            </div>
          </div>
       
        </div>

        
      </section>
     </div>
    </main>
  );
};

export default OurSuccess;
