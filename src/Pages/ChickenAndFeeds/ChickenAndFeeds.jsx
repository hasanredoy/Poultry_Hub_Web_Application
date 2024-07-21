"use client";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Heading from "@/components/custom/Heading/Heading";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async () => {
  const res = await axiosHook.get(`/api/all_items`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};
const ChickenAndFeeds = () => {
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([]);

  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadAllItems();
      // console.log({data});
      setAllChickenAndFeeds(data);
    };
    loader();
  }, []);
  // console.log({allChickenAndFeeds});

  return (
    <main>
      {/* banner  */}
      <section>
        <Banner></Banner>
      </section>
      {/* filter and heading section */}
      <section className=" my-28 max-w-[95%] lg:max-w-[85%] mx-auto">
        <Heading
          subHeading={"Welcome"}
          title={"Buy your favorite item. "}
        ></Heading>
        {/* filter drop down  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            Filter By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[40] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ChickenAndFeeds;
