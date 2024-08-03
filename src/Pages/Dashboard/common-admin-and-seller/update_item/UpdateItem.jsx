"use client";
import LoadingSpinner from "@/components/custom/LoadingSpinner/LoadingSpinner";
import { postImage } from "@/hooks/postImage";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import swal from "sweetalert";

// get custom axios hook
const axiosHook = useAxios();
// load all chicken and feeds data
const loadSingleItem = async (id) => {
  const res = await axiosHook.get(`/api/all_items/${id}`);
  // console.log(res?.data?.result);
  return res?.data?.result;
};

const UpdateItem = ({ id }) => {
  // loading state 
  const [loading , setLoading]=useState(1)
const router = useRouter()
  // getUser
  const user = useGetUser();
  // single item state
  const [singleItem, setSingleItem] = useState();
const [imgFile ,setImgFile]=useState()
// console.log(imgFile);
const image = postImage(imgFile)
// console.log(image);
  useEffect(() => {
    setLoading(1)
    //function for call loadAllItems
    const loader = async () => {
      const data = await loadSingleItem(id);
      // console.log(data);
      setSingleItem(data);
      setLoading(0)
    };
    loader();
  }, []);

 const handlerToUpdate = async (e)=>{
  setLoading(2)
 e.preventDefault()
 const form = e.target
 const KG_PCS = form.weight.value+form.kg_pcs.value
  const updateDoc ={
    name:form?.name?.value,
  price:form?.price?.value,
  weight:KG_PCS,
  description:form?.description?.value,
  availability: form.availability.value,
  seller:form.seller.value,
  image,
  listingDate:new Date(),
  expireDate: form.expireDate.value,
  category:form.category.value,
  rating:singleItem.rating,
  totalRating:singleItem.totalRating,
  totalSell:singleItem.totalSell
}
  console.log(updateDoc);
    if(!image)return swal(`An error happened please update your image again!`, {
      icon: "error",
    });
  if(image){
    const {data}=await axiosHook.put(`/api/all_items/${singleItem?._id}`,updateDoc)
    console.log(data);
    
    if(data?.result?.modifiedCount>0){
      router.push('/dashboard/all_items')
      swal(`Updated Successfully!`, {
        icon: "success",
      });
      setLoading(0)
    }
  }
 }

 if(loading==1){
  return <LoadingSpinner/>
 }
  // console.log(singleItem);
  return (
    <main className=" mt-10">
      {/* from section  */}
      <section className=" relative mt-5  flex-1 card bg-base-300 border w-full max-w-2xl lg:max-w-xl mx-auto shrink-0 ">
        <h3 className=" text-center text-base font-bold lg:text-xl pt-3">
          Update {singleItem?.name}
        </h3>

        <form onSubmit={handlerToUpdate} className="card-body">
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
                defaultValue={singleItem?.name}
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
                defaultValue={singleItem?.price}
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
                defaultValue={singleItem?.category}
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
                  defaultValue={singleItem?.weight?.split("k" || "p")[0]}
                  required
                />
                <select className=" select select-bordered" name="kg_pcs">
                  <option value="kg">KG</option>
                  <option value="pcs">PCS</option>
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
                defaultValue={singleItem?.seller}
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
                defaultValue={singleItem?.availability}
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out Of Stock</option>
                
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
           <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Current Image
                </span>
              </label>
              <Image src={image?image:singleItem?.image} width={60} height={60} alt="preview image"></Image>
            </div>
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
                className="input input-bordered"
                checked
                defaultValue={user?.email}
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
                defaultValue={singleItem?.expireDate}
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
              defaultValue={singleItem?.description}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button disabled={loading==2} className="btn btn-primary">{loading==2?<FaSpinner className=" animate-spin"></FaSpinner>:"Update"}</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default UpdateItem;
