import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Card = ({ items }) => {
  return (
    <Link href={`chicken_and_feeds/${items?._id}`} title="click" className=" hover:scale-105 hover:border-[#fe6702] card bg-base-200 h-[400px shadow border ">
      <figure>
        <img
          className=" w-[90%] h-[350px]"
          src={items?.image}
          alt={items?.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{items?.name}</h2>
        <p>
          {items?.description?.slice(0, 150)}{" "}
          <Link href={`chicken_and_feeds/${items?._id}`} className=" hover:underline text-blue-700 font-bold">
            See More..
          </Link>
        </p>
        <h5 className=" my-3 text-lg ">
          Listed By:{" "}
          <span className=" font-bold">{items?.seller}</span>
        </h5>

        <div className="divider"></div>
        <div className=" flex justify-between my-1 ">
          <h5 className=" flex-1">
            Price :{" "}
            <span className="  text-primary font-bold">{items?.price} $ </span>
          </h5>
          <h5 className=" flex gap-2 justify-start ml-40 flex-1 ">
          Rating:{' '} {' '}
            <span className=" text-primary font-bold flex items-center gap-2">
              {items?.rating}
              <FaStar></FaStar>
            </span>
          </h5>
        </div>
       
        <div className=" flex justify-between my-1 ">
          <h5 className="  flex-1 ">
            Listed in :{" "}
            <span className=" text-primary font-bold">
              {items?.listingDate}
            </span>
          </h5>
          <h5 className=" flex justify-start ml-40 flex-1 ">
            Valid Till :{" "}
            <span className=" text-primary font-bold">{items?.expireDate}</span>
          </h5>
        </div>
    
        <div className="card-actions justify-center ">
          <button className=" btn-card border-b-4   border-gray-300">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
