import Image from "next/image";
import { FaPen } from "react-icons/fa";

const page = () => {
//  get user 
  const user = {
     name:'Mr X',  
     email:"hello@gmail.com",
     phone:'+934990898',
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  
  }
  return (
    <section className=" flex flex-col justify-center my-20 ">
      {/* avatar section  */}
      <section className=" mx-auto">
      <div className="avatar">
  <div className="ring-success ring-offset-base-100 w-36 rounded-full ring ring-offset-2">
    <Image className=" w-36 h-36" alt=" avatar" width={200} height={200} src={user?.image} />
  </div>
</div>
<div className=" flex flex-col gap-3 justify-center text-center my-6">
<h3  className=" text-xl font-bold text-primary">
  {user?.name}
</h3>
<button className=" btn btn-neutral flex items-center gap-3">
      <FaPen></FaPen>
      Update Profile
    </button>
</div>
      </section>
    </section>
  );
};

export default page;