'use client'
import Heading from "@/components/custom/Heading/Heading";
import useGetUser from "@/hooks/useGetUser";
import useUserCart from "@/hooks/useUserCart";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import swal from 'sweetalert';
const UserCart = () => {
   //  get user
   const user = useGetUser()
 console.log(user);

  const [cart] = useUserCart(user?.email)
console.log(cart);
const handleDelete = ()=>{
	swal({
		title: "Are you sure?",
		text: "Once deleted, you will not be able to recover this imaginary file!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			swal("Poof! Your imaginary file has been deleted!", {
				icon: "success",
			});
		} else {
			swal("Your imaginary file is safe!");
		}
	});
}
  return (
    <main className=" my-10">
   <Heading subHeading={'Welcome'} title={"Have a look at your cart"}></Heading>
	 <h1 className="text-xl ml-8 my-5 font-bold ">Total Items: {cart?.length}</h1>
   {/* table section  */}
	<section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
		<table className="w-full p-6 text-base text-left whitespace-nowrap">
 
			<thead>
				<tr className=" border-b border-gray-900">
					<th className="p-3 border-r border-gray-300"></th>
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
		{ cart.map((data , index)=>	<tr className="border-b" key={index}>
					<td className="px-3 border-r border-gray-400">
             <h3>{index+1}</h3>
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
						<button onClick={handleDelete}  className="btn text-red-600">
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