"use client";
import { postImage } from "@/hooks/postImage";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import moment from "moment"


// get custom axios hook
const axiosHook = useAxios();


const AddItem = ({ id }) => {
const router = useRouter()
  // getUser
  const user = useGetUser();
const [imgFile ,setImgFile]=useState()
// console.log(imgFile);
const image = postImage(imgFile)

 const handlerForAddItem = async (e)=>{
 e.preventDefault()
 const form = e.target
 const KG_PCS = form.weight.value+form.kg_pcs.value
  const itemInfo ={
    name:form?.name?.value,
  price:parseFloat(form?.price?.value),
  weight:KG_PCS,
  description:form?.description?.value,
  availability: form.availability.value,
  seller:form.seller.value,
  image,
  listingDate:new Date(),
  expireDate: form.expireDate.value,
  category:form.category.value,
  email:form.email.value,
  rating:3,
  totalRating:3,
  totalSell:1
}
const newDate = moment(new Date()).format().split("T")[0];

if(form?.expireDate?.value<newDate){
  swal({
    text:"Invalid Date",
    icon:"error",
    didClose:true
  })
  return 
}
  console.log(itemInfo);
    if(!image)return swal(`An error happened please update your image again!`, {
      icon: "error",
    });
  if(image){
    const {data}=await axiosHook.post(`/api/all_items`,itemInfo)
    console.log(data);
    if(data?.result?.insertedId){
      router.push('/dashboard/my_listed_item')
      swal(`Item Added Successfully!`, {
        icon: "success",
      });
    }
  }
 }

  // console.log(singleItem);
  return (
    <main className=" mt-10">
      {/* from section  */}
      <section className=" relative mt-5  flex-1 card bg-base-300 border w-full max-w-2xl lg:max-w-xl mx-auto shrink-0 ">
        <h3 className=" text-center text-base font-bold lg:text-xl pt-3">
          Add An Item
        </h3>

        <form onSubmit={handlerForAddItem} className="card-body">
          {/* sect for name and price  */}
          <section className=" flex  flex-col md:flex-row w-full gap-5">
            {/* Name div  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">Name</span>
              </label>
              <input
                type="text"
                placeholder=" Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            {/* Price div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Price
                </span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                required
                name="price"
              />
            </div>
          </section>
          {/* sect for weight/pcs and category  */}

          <section className=" flex flex-col md:flex-row  w-full justify-between gap-5">
            {/* category div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Category
                </span>
              </label>
              <select
                className=" select select-bordered"
                name="category"
                required
              >
                <option value="Chicken">Chicken</option>
                <option value="Chicks">Chicks</option>
                <option value="Egg">Eggs</option>
                <option value="Feed">Feed</option>
              </select>
            </div>
            {/* weight/pcs div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Weight/Pcs
                </span>
              </label>
              <div className=" flex gap-2">
                <input
                  type="number"
                  placeholder=""
                  className="input input-bordered"
                  name="weight"
                  required
                />
                <select className=" select select-bordered" name="kg_pcs">
                  <option value="kg">KG</option>
                </select>
              </div>
            </div>
          </section>
          {/* sect for seller and status */}
          <section className=" flex flex-col md:flex-row  w-full gap-5">
            {/* seller div  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Seller/Company Name
                </span>
              </label>
              <input
                type="text"
                placeholder="seller/company name"
                name="seller"
                className="input input-bordered"
                required
              />
            </div>
             {/* category div  */}
             <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Status
                </span>
              </label>
              <select
                className=" select select-bordered"
                name="availability"
                required
              >
                <option value="In Stock">In Stock</option>
                
              </select>
            </div>
          </section>
          <section className=" flex  flex-col md:flex-row w-full gap-5">
           {/* image div  */}
           <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Image
                </span>
              </label>
              <input
                type="file"
                onChange={(e)=>setImgFile(e?.target?.files[0])}
                name="image"
                required
                
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
           {/* image preview  */}
           {image&&
           <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Current Image
                </span>
              </label>
              
              <Image src={image?image:''} width={60} height={60} alt="preview image"></Image>
            </div>}
            </section>
          {/* sect for expire date and email  */}
          <section className=" flex flex-col md:flex-row  w-full gap-5">
            {/* email div  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            {/* Price div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Valid Till
                </span>
              </label>
              <input
                type="date"
                placeholder="date"
                name="expireDate"
                className="input input-bordered"
                required
              />
            </div>
          </section>
          {/* Description div  */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="   text-sm font-bold lg:text-base ">
                Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered "
              rows={5}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddItem;
