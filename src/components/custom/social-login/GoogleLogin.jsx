import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const GoogleLogin=()=>{
    return signIn('google',{redirect:false})
  }
  return (
    <div className=" flex justify-center my-5 ">
      <button className=" btn border-gray-500 flex items-center"> Continue With <FcGoogle className=" text-2xl"></FcGoogle></button>
    </div>
  );
};

export default GoogleLogin;