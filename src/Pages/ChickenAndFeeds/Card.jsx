import PostOnCart from "@/components/custom/postOnCart/PostOnCart";
import Link from "next/link";
import { FaChartLine, FaRegCalendarPlus, FaRegCalendarTimes, FaStar } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <main  className=" md:hover:scale-105 hover:border-[#fe6702] card bg-base-200  shadow border ">
      <figure>
        <img
          className=" w-[90%] h-auto lg:h-[350px]"
          src={item?.image}
          alt={item?.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <p>
          {item?.description?.slice(0, 150)}{" "}
          <Link href={`chicken_and_feeds/${item?._id}`} className=" hover:underline text-blue-700 font-bold">
            See More..
          </Link>
        </p>
        <h5 className=" my-3  ">
          Listed By:{" "}
          <span className=" font-bold">{item?.seller}</span>
        </h5>

        <div className=" border my-2 lg:border-none md:divider "></div>
        <div className=" flex justify-between my-1 ">
          <h5 className=" text-sm md:text-base  flex-1">
            Price :{" "}
            <span className="    font-bold">
              {item?.price} ${" "}
            </span>
          </h5>
          <h5 className=" text-sm md:text-base  flex gap-2 justify-start md:ml-48 lg:ml-20 xl:ml-40 flex-1 ">
            {item?.category == "Eggs" ? "Quantity" : "Weight"} :{" "}
            <span className="   font-bold">
              {item?.weight}
            </span>
          </h5>
        </div>
        <div className=" flex justify-between my-1 ">
          <h5 className=" text-sm md:text-base flex flex-1 items-center gap-2">
            Ratings :{" "}
            <span className="   font-bold flex single items-center gap-2">
              {item?.rating}
              <FaStar className=" pb-1"></FaStar>
            </span>
          </h5>
          <h5 className=" text-sm md:text-base flex-1 md:ml-48 lg:ml-20 xl:ml-40 flex gap-2 ">
            Total Sell :{" "}
            <span className="gap-2 flex justify-center items-center font-bold">
              {item?.totalSell}
              <FaChartLine></FaChartLine>
            </span>
          </h5>
        </div>
     

        <div className="card-actions justify-between mt-5 lg:mt-10 ">
          <Link href={`chicken_and_feeds/${item?._id}`}  className=" btn-outline "> View Details</Link >
         <PostOnCart cart={item}></PostOnCart>
        </div>
      </div>
    </main>
  );
};

export default Card;
