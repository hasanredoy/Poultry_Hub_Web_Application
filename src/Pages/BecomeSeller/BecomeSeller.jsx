"use client";
import Heading from "@/components/custom/Heading/Heading";
import { FaLocationArrow } from "react-icons/fa";
import Seller from "../../../public/seller/happy-farmer-hens-organic-eggs-600nw-2317428329.webp";
import seller2 from "../../../public/seller/seller-image.jpg";
import Image from "next/image";
import useGetUser from "@/hooks/useGetUser";
import useAxios from "@/hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import useGetUserRole from "@/hooks/useGetUserRole";

const axiosHook = useAxios();
// function to load cart
const loadSeller = async (email) => {
  const { data } = await axiosHook.get(`/api/seller?email=${email}`);
  //  //console.log(data);
  return data?.result;
};

const BecomeSeller = () => {
  // state to handle pagination page
  const [seller, setSeller] = useState({});
  const [refetch, setRefetch] = useState(0);
  const user = useGetUser();
  const role = useGetUserRole();
  //console.log({ role });
  // get user
  // effect to call cart
  useEffect(() => {
    const loader = async () => {
      const sellerData = await loadSeller(user?.email);
      setSeller(sellerData);
    };
    loader();
  }, [user,refetch]);
  //console.log(seller);
  // handler for post seller req
  const handleSeller = async (e) => {

    e.preventDefault();
    if(seller?.status=='rejected'){
     return  axiosHook.patch(`/api/seller/all_sellers?email=${user?.email}`).then(res=>{
       if(res?.data?.result?.modifiedCount>0){
        setRefetch(refetch+1)
        toast.success("Request sent!");
      }})
      
    }
    const sellerInfo = {
      name: user?.name,
      email: user?.email,
      photo: user?.image,
      date: new Date(),
      company: e.target?.company?.value,
      description: e.target?.description?.value,
      status: "pending",
    };
    const res = await axiosHook.post("/api/seller", sellerInfo);
    //console.log(res.data);
    if (res?.data?.result?.insertedId) {
      setRefetch(refetch+1)
      toast.success("Your request is under process, please wait!");
    }
  };

  // handle req again 
  const handleRequestAgain=async(email)=>{
    const {data}=await axiosHook.patch(`/api/seller/all_sellers?email=${email}`)
    if(data?.result?.modifiedCount>0){
      toast.success("Request sent!");
    }
  }

  return (
    <div>
      {/* banner section  */}
      <section className="">
        <div className=" mt-10 mb-20 flex flex-col lg:flex-row-reverse items-center">
          <div className=" flex-1 flex justify-center ">
            <Image
              alt="contact us"
              height={600}
              width={600}
              src={Seller}
              className=" w-full  md:w-2/3 mx-auto lg:w-full "
            />
          </div>
          <div className=" flex-1">
            <h1 className="text-xl font-bold lg:text-3xl">
              Join Our Community of Poultry Entrepreneurs
            </h1>
            <p className="py-6 ">
              At Poultry Hub, we believe in empowering local farmers and
              entrepreneurs to thrive in the poultry industry. By becoming a
              seller on our platform, you gain access to a wide network of
              customers who are looking for quality poultry products and
              supplies. Whether you are an established business or just starting
              out, Poultry Hub provides the tools and support you need to grow
              and succeed.
            </p>
            <a href="#seller" className="btn-primary">
              Become Seller
            </a>
          </div>
        </div>
      </section>
      {/* form section  */}
      <section className=" my-10 ">
        {/* import custom heading  */}
        <Heading
          subHeading={"Fill the form blew"}
          title={"Start Selling"}
        ></Heading>
        <div className=" flex gap-5 mt-10 justify-between flex-col lg:flex-row">
          {/* form banner  image  */}
          <div className="  w-full">
            <Image
              alt="seller form image us image"
              height={600}
              width={500}
              src={seller2}
              className=" w-full bg-gray-300 ] "
            />
          </div>
          {/* form div  */}
          <div
            id="seller"
            className="card bg-base-200 w-full rounded-none max-w-xl border border-gray-300 shrink-0 "
          >
            <h3 className="subtitle text-center pt-2">Fill the form</h3>
            <form onSubmit={handleSeller} className="card-body">
              {/* name div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Full Name*
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={user ? user?.name : "Jhon Doe"}
                  placeholder="Full Name "
                  className="input "
                  required
                />
              </div>
              {/* email div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">Email*</span>
                </label>
                <input
                  defaultValue={user ? user?.email : "jhondoe@gmail.com"}
                  type="email"
                  placeholder="Email"
                  className="input "
                  required
                />
              </div>
              {/* farm name div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Farm / Factory Name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Farm / Factory"
                  className="input "
                  name="company"
                  required
                />
              </div>
              {/* message div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Tell us why you wanna become seller*
                  </span>
                </label>
                <textarea
                  name="description"
                  className=" textarea "
                  placeholder="write here__"
                  id=""
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={seller?.status === "pending" || role !== "user"}
                  className="btn flex items-center gap-2 btn-primary"
                >
                  {role !== "user" ? (
                    <span className="text-black">This form only for user.</span>
                  ) : (
                    <div>
                      {seller?.status == "pending" && (
                        <div className=" flex justify-center items-center">
                          <h3 className=" text-lg font-semibold text-black">
                            Your request is under process.
                          </h3>
                        </div>
                      )}
                      {seller?.status == "rejected" && (
                        <div className=" flex justify-center items-center">
                          <a  className=" text-lg font-semibold hover:text-black text-white">
                            Request again.
                          </a>
                        </div>
                      )}
                      {!seller && (
                        <div >
                          <a  className=" flex justify-center items-center gap-1">
                            Send <FaLocationArrow></FaLocationArrow>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default BecomeSeller;
