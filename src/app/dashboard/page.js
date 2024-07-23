import Image from "next/image";

const page = () => {
//  get user 
  const user = {
     name:'Mr X',  
     email:"hello@gmail.com",
     phone:'+934990898',
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  
  }
  return (
    <section>
      {/* avatar section  */}
      <section className=" mx-auto">
      <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <Image alt=" avatar" width={40} height={50} src={user?.image} />
  </div>
</div>
      </section>
    </section>
  );
};

export default page;