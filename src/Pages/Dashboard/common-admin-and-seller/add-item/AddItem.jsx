import Heading from "@/components/custom/Heading/Heading";

const AddItem = () => {
  // {
  //   "name": "Organic Free-Range Chicken",
  //   "price": 12.99,
  //   "weight": "1.5kg",
  //   "description": "Raised without antibiotics, our organic free-range chickens are perfect for a healthy meal. These chickens are allowed to roam freely, ensuring they live in a natural and humane environment. The result is a chicken that is both healthy and delicious, with a rich flavor that only comes from organic farming.",
  //   "availability": "In Stock",
  //   "seller": "Healthy Hens",
  //   "image": "https://i.postimg.cc/GpTjMRPk/2148315271.jpg",
  //   "listingDate": "2024-07-01",
  //   "expireDate": "2024-12-31",
  //   "category": "Chicken",
  //   "rating": 4.5,
  //   "totalRating": 150,
  //   "totalSell": 2000
  // }
    //  get user
    const user = {
      name: "Mr X",
      email: "hello@gmail.com",
      phone: "+934990898",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
  return (
    <main className=" mt-10">
      <Heading subHeading={'Welcome Back'} ></Heading>
  {/* from section  */}
  <section className=" relative mt-5  flex-1 card bg-base-300 border w-full max-w-2xl lg:max-w-xl mx-auto shrink-0 ">
          <h3 className=" text-center text-base font-bold lg:text-xl pt-3">
            Add A New Item 
          </h3>
     
          <form className="card-body">
            {/* sect for name and price  */}
        <section className=" flex  flex-col md:flex-row w-full gap-5">
                 {/* Name div  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                   Name
                </span>
              </label>
              <input
                type="text"
                placeholder=" Name"
                className="input input-bordered"
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
              <select className=" select select-bordered" name="category">
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
                required
              />
                <select className=" select select-bordered" name="category">
                <option value="kg">KG</option>
                <option value="pcs">PCS</option>
             
                </select>
             </div>
            </div>
             </section>
              {/* sect for seller and image */}
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
                placeholder="seller"
                className="input input-bordered"
                required
              />
            </div>
            {/* image div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                   Image
                </span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
             </section>
           {/* sect for expire date and email  */}
           <section className=" flex flex-col md:flex-row  w-full gap-5">
                 {/* Name div  */}
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
              <textarea name="description" className="textarea textarea-bordered " rows={5} placeholder="Description" required></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </section>
    </main>
  );
};

export default AddItem;