import Link from "next/link";

const error = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center flex-col gap-5">
      <h1 className=" text-2xl font-bold "> An error just happened </h1>
      <Link href={-1} className=" btn btn-error">Go Back</Link>
    </div>
  );
};

export default error;