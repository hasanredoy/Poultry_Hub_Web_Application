'use client'
import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
        <ImSpinner9 className=" text-xl"/>           
    </div>
  );
};

export default loading;