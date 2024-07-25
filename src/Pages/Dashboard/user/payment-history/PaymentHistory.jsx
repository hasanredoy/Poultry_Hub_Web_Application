import Heading from '@/components/custom/Heading/Heading';
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const PaymentHistory = () => {
     //  get user
     const user = {
      name: "Mr X",
      email: "hello@gmail.com",
      phone: "+934990898",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
  
  // get payments 
    const payments = [
      {
        "items": ["Organic Free-Range Chicken",'helloe afidsajkhkj'],
        "itemsId": ["5445",'8555'],
        "totalPrice": 22.99,   
        "paymentDate": "2024-07-01",
        "transactionId": "5654685a5235",
        email:user?.email,
  
      },
    ];
  return (
    <main className=' mt-10'>
      <Heading subHeading={'Welcome'} title={'Here are all of your payments'}></Heading>
         {/* table section  */}
	<section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
		<table className="w-full p-6 text-base text-left whitespace-nowrap">
 
			<thead>
				<tr className=" border-b border-gray-900">
					<th className="p-3 border-r border-gray-300"></th>
					<th className="p-3 border-r border-gray-300">Items</th>
					<th className="p-3 border-r border-gray-300">Total Price</th>
					<th className="p-3 border-r border-gray-300">Payment Date</th>
					<th className="p-3 border-r border-gray-300">TransactionId</th>
					<th className="p-3 border-r border-gray-300">Email</th>
					<th className="p-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody className="border-b text-sm ">
		{ payments.map((data , index)=>	<tr key={index}>
					<td className="px-3 border-r border-gray-400">
             <p>{index+1}</p>
          </td>
					<td className="px-3 py-2 border-r border-gray-400">
						<ul className='flex flex-col gap-1'>{data?.items?.map(item=><li className=' ml-2 list-disc' key={item}>{item}</li>)}</ul>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p className="">{data?.totalPrice} $</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.paymentDate}</p>
					</td>
					<td className="px-3 py-2 border-r border-gray-400">
						<p>{data?.transactionId}</p>
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

export default PaymentHistory;