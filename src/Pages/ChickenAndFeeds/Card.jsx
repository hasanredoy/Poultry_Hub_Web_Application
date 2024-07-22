import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Card = ({items}) => {
  return (
    <section className="card bg-base-200 h-[400px shadow border">
  <figure>
    <img className=" w-[90%] h-[350px]"
      src={items?.image}
      alt={items?.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{items?.name}</h2>
    <p>{items?.description?.slice(0,150)} <Link href={'#'} className=" hover:underline text-blue-700 font-bold">See More..</Link></p>
    <h5  className=" my-3 text-lg ">Listed By: <span className=" text-primary font-bold">{items?.seller}</span></h5>
      
    <div className="divider"></div>
    <div className=" flex justify-between my-1 ">
      <h5 className=" flex-1">Price : <span className="  text-primary font-bold">{items?.price} $ </span></h5>
      <h5 className=" flex justify-start ml-40 flex-1 ">{items.category=='Eggs'?'Quantity':'Weight'} : <span className=" text-primary font-bold">{items?.weight}</span></h5>
    </div>
    <div className=" flex justify-between my-1 ">
      <h5 className="flex flex-1 items-center gap-2">Ratings : <span className=" text-primary font-bold flex items-center gap-2">{items?.rating}<FaStar></FaStar></span></h5>
      <h5 className=" flex justify-start ml-40 flex-1 ">Total Ratings : <span className=" text-primary font-bold">{items?.totalRating}</span></h5>
    </div>
    <div className=" flex justify-between my-1 ">
      <h5  className="  flex-1 ">Listed in : <span className=" text-primary font-bold">{items?.listingDate}</span></h5>
      <h5  className=" flex justify-start ml-40 flex-1 ">Valid Till : <span className=" text-primary font-bold">{items?.expireDate}</span></h5>
    </div>
    <div className=" flex justify-between my-1 ">
      <h5  className="flex-1 ">Total Sell : <span className=" text-primary font-bold">{items?.totalSell}</span></h5>
    
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
    </section>
  );
};

export default Card;