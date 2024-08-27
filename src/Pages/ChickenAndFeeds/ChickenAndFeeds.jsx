"use client";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Card from "./Card";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import DataNotFound from "@/components/custom/DataNotFound/DataNotFound";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/custom/Pagination/Pagination";
import useGetUser from "@/hooks/useGetUser";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadAllItems = async (filter,search,page,size) => {
  const res = await axiosHook.get(
    `/api/all_items?filter=${filter}&search=${search}&page=${page}&size=${size}`
  );
  // //console.log(res?.data?.result);
  return res?.data?.result;
};
const loadAllItemsCount = async (filter, search) => {
  const res = await axiosHook.get(
    `/api/count/all_items`
  );
  // //console.log(res?.data?.result);
  return res?.data?.count;
};
const ChickenAndFeeds = () => {
  
  // state to handleCurrent page 
  const [currentPage,setCurrentPage]=useState(0)
  // state to handle count 
  const [count,setCount]=useState(0)
  // state to handle search
  const [search, setSearch] = useState("");
  // state to control up arrow and down arrow
  const [arrowUp, setArrowUp] = useState(true);
  // state for all chicken and feed
  const [allChickenAndFeeds, setAllChickenAndFeeds] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  // call pagination
  const [totalPage,pages] = usePagination(count, 8);
  // loading state 
  const [loading , setLoading]=useState(true)

  // get user 
  const user = useGetUser()


  useEffect(() => {
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadAllItems(filterValue,search,currentPage,8);
      // //console.log(data);
      setAllChickenAndFeeds(data);
      setLoading(false)
    };
    loader();
  }, [filterValue,search,currentPage]);

  useEffect(() => {
    //function for call loadAllItemsCount
    const loader = async () => {
      const data = await loadAllItemsCount();
      // //console.log(data);
      setCount(data);
      setLoading(false)
    };
    loader();
  }, []);

// //console.log(allChickenAndFeeds);

  
  return (
    <main className="mt-2">
      {/* banner  */}
      <section>
        <Banner setSearch={setSearch}></Banner>
      </section>
      {/* filter and heading section */}
      <section className=" my-10 max-w-[95%] lg:max-w-[85%] mx-auto">
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
            <a
              onClick={() => setFilterValue("Chicken")}
              className={`${
                filterValue == "Chicken" && "bg-gray-300 text-[#fe6702]"
              } text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}
            >
              Chickens
            </a>
            {/* chicks  */}
            <a
              onClick={() => setFilterValue("Baby Chicks")}
              className={`${
                filterValue == "Baby Chicks" && "bg-gray-300 text-[#fe6702]"
              } text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}
            >
              Baby Chicks
            </a>
            {/* eggs  */}
            <a
              onClick={() => setFilterValue("Eggs")}
              className={`${
                filterValue == "Eggs" && "bg-gray-300 text-[#fe6702]"
              } text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}
            >
              Eggs
            </a>
            {/* feed */}
            <a
              onClick={() => setFilterValue("Feed")}
              className={`${
                filterValue == "Feed" && "bg-gray-300 text-[#fe6702]"
              } text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}
            >
              Feeds
            </a>
            <a
              onClick={() => setFilterValue("")}
              className={` text-base pl-2 hover:bg-gray-300 hover: cursor-pointer hover:text-[#fe6702] font-bold mb-2`}
            >
              Clear All Filter
            </a>
          </ul>
        </details>
      </section>
      {/* if items in loading return skeleton */}
      {loading ? (
        <Skeleton></Skeleton>
      ) : (
        <>
          {/* return no data found image if no data founded */}
          {allChickenAndFeeds?.length == 0 && <DataNotFound></DataNotFound>}
          {/* card section  */}
          <section className=" my-10  grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[95%] md:max-w-[75%] lg:max-w-[85%] mx-auto">
            {allChickenAndFeeds?.map((item, index) => (
              <Card key={item?._id} item={item}></Card>
            ))}
          </section>
          {<Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}></Pagination>}
        </>
      )}
    </main>
  );
};

export default ChickenAndFeeds;
