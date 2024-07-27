"use client";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Card from "./Card";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import DataNotFound from "@/components/custom/DataNotFound/DataNotFound";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async (filter) => {
  const res = await axiosHook.get(`/api/all_items?filter=${filter}`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const ChickenAndFeeds = () => {
  // state to control up arrow and down arrow
  const [arrowUp, setArrowUp] = useState(true);
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([{name:'loading'}]);
  const [filterValue , setFilterValue]=useState('')

  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadAllItems(filterValue);
      console.log(data);
      setAllChickenAndFeeds(data);
    };
    loader();
  }, [filterValue]);
  // console.log({ allChickenAndFeeds });
console.log({filterValue});
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
          <summary
            onClick={() => setArrowUp(!arrowUp)}
            className="btn bg-neutral-700 text-white border-none hover:bg-neutral-200 hover:text-neutral-950 m-1"
          >
            Filter by{" "}
            {arrowUp ? (
              <IoIosArrowDown className=" text-xl"></IoIosArrowDown>
            ) : (
              <IoIosArrowUp className=" text-xl"></IoIosArrowUp>
            )}{" "}
          </summary>
          <ul className="menu dropdown-content bg-base-200 rounded z-[40] w-32 p-2 shadow ml-10">
            {/* chicken  */}
            <a onClick={()=>setFilterValue('Chicken')} className={`${filterValue=='Chicken'&&'bg-gray-300 text-[#fe6702]'} text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}>
              Chickens
            </a>
            {/* chicks  */}
            <a onClick={()=>setFilterValue('Baby Chick')}  className={`${filterValue=='Baby Chicks'&&'bg-gray-300 text-[#fe6702]'} text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}>
              Baby Chicks
            </a>
            {/* eggs  */}
            <a onClick={()=>setFilterValue('Eggs')}  className={`${filterValue=='Eggs'&&'bg-gray-300 text-[#fe6702]'} text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}>
              Eggs
            </a>
            {/* feed */}
            <a  onClick={()=>setFilterValue('Feed')}   className={`${filterValue=='Feed'&&'bg-gray-300 text-[#fe6702]'} text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}>
              Feeds
            </a>
            <a  onClick={()=>setFilterValue('')}   className={` text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}>
              Clear All Filter
            </a>
          </ul>
        </details>
      </section>
        {/* if items in loading return skeleton */}
        {allChickenAndFeeds[0]?.name=='loading'?<Skeleton></Skeleton>:<>
        {/* return no data found image if no data founded */}
      {allChickenAndFeeds.length==0&&<DataNotFound></DataNotFound>}
      {/* card section  */}
      <section className=" my-10  grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[95%] lg:max-w-[85%] mx-auto">
        {allChickenAndFeeds?.map((items, index) => (
          <Card key={items?._id} items={items}></Card>
        ))}
      </section>
      </>}
    </main>
  );
};

export default ChickenAndFeeds;
