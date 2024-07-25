import Heading from "@/components/custom/Heading/Heading";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const UserCart = () => {
   //  get user
   const user = {
    name: "Mr X",
    email: "hello@gmail.com",
    phone: "+934990898",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };


  const userData = [
    {
      "name": "Organic Free-Range Chicken",
      "price": 12.99,
      "image": "https://i.postimg.cc/GpTjMRPk/2148315271.jpg",
      "bookingDate": "2024-07-01",
      "category": "Chicken",
      email:user?.email,

    },
  ];

  return (
    <main className=" my-10">
   <Heading subHeading={'Welcome'} title={"Have a look at your cart"}></Heading>
   {/* table section  */}
	<section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
		<table className="w-full p-6 text-base text-left whitespace-nowrap">
 
			<thead>
				<tr className=" border-b border-gray-900">
					<th className="p-3 border-r border-gray-300">Image</th>
					<th className="p-3 border-r border-gray-300">Item Name</th>
					<th className="p-3 border-r border-gray-300">Price</th>
					<th className="p-3 border-r border-gray-300">Booking Date</th>
					<th className="p-3 border-r border-gray-300">Category</th>
					<th className="p-3 border-r border-gray-300">Email</th>
					<th className="p-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody className="border-b text-sm ">
		{ userData.map((data , index)=>	<tr>
					<td className="px-3 border-r border-gray-400">
             <Image src={data?.image} width={40} height={40} alt={data?.name}></Image>
          </td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.name}</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p className="">{data?.price}$</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.bookingDate}</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.category}</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.email}</p>
						
					</td>
					<td className="px-3 py-2">
						<button  className="btn text-red-600">
				     <FaTrash></FaTrash>
						</button>
					</td>
				</tr>
				)}	
			</tbody>
	
		</table>
	</section>

    </main>
  );
};

export default UserCart;