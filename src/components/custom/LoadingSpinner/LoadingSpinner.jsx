import { ImSpinner9 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <ImSpinner9 className=" text-3xl animate-spin"></ImSpinner9>
    </div>
  );
};

export default LoadingSpinner;