import Heading from "@/components/custom/Heading/Heading";

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
   <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-300">
					<th className="p-3">A-Z</th>
					<th className="p-3">Name</th>
					<th className="p-3">Job title</th>
					<th className="p-3">Phone</th>
					<th className="p-3">Email</th>
					<th className="p-3">Address</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b ">
		{ userData.map((data , index)=>	<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">{index+1}</td>
					<td className="px-3 py-2">
						<p>Alex Bridges</p>
					</td>
					<td className="px-3 py-2">
						<span>Administrative Services Manager</span>
						<p className="dark:text-gray-600">Smilectronics</p>
					</td>
					<td className="px-3 py-2">
						<p>555-238-9890</p>
					</td>
					<td className="px-3 py-2">
						<p>alex@bridges.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Hooivelden 117, Kortrijk</p>
						<p className="dark:text-gray-600">Belgium</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				)}	
			</tbody>
	
		</table>
	</div>
</div>
    </main>
  );
};

export default UserCart;