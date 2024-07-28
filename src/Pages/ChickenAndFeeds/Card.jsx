import PostOnCart from "@/components/custom/postOnCart/PostOnCart";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <main  className=" hover:scale-105 hover:border-[#fe6702] card bg-base-200 h-[400px shadow border ">
      <figure>
        <img
          className=" w-[90%] h-[350px]"
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
        <h5 className=" my-3 text-lg ">
          Listed By:{" "}
          <span className=" font-bold">{item?.seller}</span>
        </h5>

        <div className="divider"></div>
        <div className=" flex justify-between my-1 ">
          <h5 className=" flex-1">
            Price :{" "}
            <span className="  text-primary font-bold">{item?.price} $ </span>
          </h5>
          <h5 className=" flex gap-2 justify-start ml-40 flex-1 ">
          Rating:{' '} {' '}
            <span className=" text-primary font-bold flex item-center gap-2">
              {item?.rating}
              <FaStar></FaStar>
            </span>
          </h5>
        </div>
       
        <div className=" flex justify-between my-1 ">
          <h5 className="  flex-1 ">
            Listed in :{" "}
            <span className=" text-primary font-bold">
              {item?.listingDate}
            </span>
          </h5>
          <h5 className=" flex justify-start ml-40 flex-1 ">
            Valid Till :{" "}
            <span className=" text-primary font-bold">{item?.expireDate}</span>
          </h5>
        </div>
    
        <div className="card-actions justify-between mt-10 ">
          <Link href={`chicken_and_feeds/${item?._id}`}  className=" btn-outline "> View Details</Link >
         <PostOnCart cart={item}></PostOnCart>
        </div>
      </div>
    </main>
  );
};

export default Card;
