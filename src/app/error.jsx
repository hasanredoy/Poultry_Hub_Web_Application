'use client'
import Link from "next/link";

const error = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center flex-col gap-5">
      <h1 className=" text-2xl font-bold "> An error just happened </h1>
      <Link href={'/'} className=" btn btn-error text-white">Go Back</Link>
    </div>
  );
};

export default error;