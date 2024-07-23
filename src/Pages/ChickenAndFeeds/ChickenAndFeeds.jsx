"use client";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Heading from "@/components/custom/Heading/Heading";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Card from "./Card";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async () => {
  const res = await axiosHook.get(`/api/all_items`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const ChickenAndFeeds = () => {
  // state to control up arrow and down arrow 
  const [arrowUp , setArrowUp]=useState(true)
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([]);

  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      // const data = await loadAllItems();
      // console.log(data);
      // setAllChickenAndFeeds(data);
    };
    loader();
  }, []);
  console.log({allChickenAndFeeds});

  return (
    <main>
      {/* banner  */}
      <section>
        <Banner></Banner>
      </section>
      {/* filter and heading section */}
      <section className=" my-10 max-w-[95%] lg:max-w-[85%] mx-auto">
        {/* <Heading
          subHeading={"Welcome"}
          title={"Buy your favorite item. "}
        ></Heading> */}
        {/* filter drop down  */}
        <details className="dropdown">
  <summary onClick={()=>setArrowUp(!arrowUp)} className="btn bg-neutral-700 text-white border-none hover:bg-neutral-200 hover:text-neutral-950 m-1">Filter by {arrowUp?<IoIosArrowDown className=" text-xl"></IoIosArrowDown>:<IoIosArrowUp className=" text-xl"></IoIosArrowUp>} </summary>
  <ul className="menu dropdown-content bg-base-200 rounded z-[40] w-32 p-2 shadow ml-10">
    <li className="text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-stone-500 font-bold mb-2">Chickens</li>
    <li className="text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-stone-500 font-bold mb-2">Chicks</li>
    <li className="text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-stone-500 font-bold mb-2">Eggs</li>
    <li className="text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-stone-500 font-bold mb-2">Feeds</li>
  </ul>
</details>
     
      </section>

      {/* card section  */}
      <section className=" my-10  grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[95%] lg:max-w-[85%] mx-auto">
        {allChickenAndFeeds?.map((items,index)=><Card key={items?._id} items={items}></Card>
        )}
      </section>
    </main>
  );
};

export default ChickenAndFeeds;
