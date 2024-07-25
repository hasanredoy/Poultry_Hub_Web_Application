import Heading from "@/components/custom/Heading/Heading";
import Image from "next/image";
import { FaPen, FaTrash } from "react-icons/fa";

const MyListedItem = () => {
  //  get user
  const user = {
    name: "Mr X",
    email: "hello@gmail.com",
    phone: "+934990898",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };

  const userData = [
    {
      name: "Organic Free-Range Chicken",
      price: 12.99,
      image: "https://i.postimg.cc/GpTjMRPk/2148315271.jpg",
      listingDate: "2024-07-01",
      expireDate: "2024-12-31",
      category: "Chicken",
      totalSell:'5',
      rating:'4'
    },
  ];

  return (
    <main className=" my-10">
      <Heading
        subHeading={"Welcome Back"}
        title={"Have a look at your listed item"}
      ></Heading>
      {/* table section  */}
      <h1 className="text-xl ml-8 my-5 font-bold ">Total Items: {userData?.length}</h1>
      <h1 className="text-xl font-bold ">Total Revenue: {revenue}</h1>
      <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
        <table className="w-full p-6 text-base text-center whitespace-nowrap">
          <thead>
            <tr className=" border-b border-gray-900">
              <th className="p-3 border-r border-gray-300">Image</th>
              <th className="p-3 border-r border-gray-300">Item Name</th>
              <th className="p-3 border-r border-gray-300">Price</th>
              <th className="p-3 border-r border-gray-300">Listing Date</th>
              <th className="p-3 border-r border-gray-300">Valid Till</th>
              <th className="p-3 border-r border-gray-300">Total Rating</th>
              <th className="p-3 border-r border-gray-300">Total Sell</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="border-b text-sm ">
            {userData.map((data, index) => (
              <tr className="border-b" key={index}>
                <td className="px-3 border-r border-gray-400">
                  <Image
                    src={data?.image}
                    width={40}
                    height={40}
                    alt={data?.name}
                  ></Image>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.name}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p className="">{data?.price}$</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.listingDate}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.expireDate}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.rating}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{data?.totalSell}</p>
                </td>
                <td className="px-3 py-2 flex gap-2">
                  <button title="Delete" className="btn text-red-600">
                    <FaTrash></FaTrash>
                  </button>
                  <button title="Edit" className="btn text-green-600">
                    <FaPen></FaPen>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default MyListedItem;
