"use client";
import Heading from "@/components/custom/Heading/Heading";
import Pagination from "@/components/custom/Pagination/Pagination";
import Skeleton from "@/components/custom/Skeleton/Skeleton";
import SkeletonTable from "@/components/custom/Skeleton/SkeletonTable";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import useGetUserRole from "@/hooks/useGetUserRole";
import usePagination from "@/hooks/usePagination";
import { GeneralContext } from "@/services/ContextProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaCross, FaSearch, FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { IoMdPersonAdd } from "react-icons/io";
import swal from "sweetalert";

// get custom axios hook
const axiosHook = useAxios();
// load all user
const loadSellers = async (page, size, search) => {
  const res = await axiosHook.get(
    `/api/seller/all_sellers?size=${size}&page=${page}&search=${search}`
  );
  console.log(res?.data?.result);
  return res?.data?.result;
};

const AllSeller = () => {
  const user = useGetUser();
  // state for all chicken and feed
  const [allSellers, setAllSellers] = useState([]);
  // loading state
  const [loading, setLoading] = useState(false);
  // refetch state
  const [refetch, setRefetch] = useState(false);

  // current page state
  const { sellerCount } = useContext(GeneralContext);
  console.log(sellerCount);
  const [currentPage, setCurrentPage] = useState(0);
  //  get pagination hook
  const [totalPage, pages] = usePagination(sellerCount, 8);

  // search state
  const [search, setSearch] = useState("");

  // get user role
  const role = useGetUserRole(user?.email);

  useEffect(() => {
    //function for call loadAllSellers
    const loader = async () => {
      setLoading(true);
      const data = await loadSellers(currentPage, 8, search);
      console.log(data);
      setAllSellers(data);
      setLoading(false);
    };
    loader();
  }, [refetch, currentPage, search]);

  // handler to make seller
  const handleMakeSeller = async (name, email) => {
    swal({
      title: "Are you sure?",
      text: "You wanna make this user seller",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const { data } = await axiosHook.patch(`/api/seller?email=${email}`);
        console.log(data);
        if (
          data?.resultUserCollection?.modifiedCount > 0 ||
          data?.resultSellerCollection?.modifiedCount > 0
        ) {
          setRefetch(!refetch);
          swal(`${name} is seller from now`, {
            icon: "success",
          });
        }
      } else {
        swal("canceled!");
      }
    });
  };
  // handler to reject seller
  const handleRejectSeller = async (name, email) => {
    swal({
      title: "Are you sure?",
      text: "You wanna reject this user's request",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const { data } = await axiosHook.delete(`/api/seller?email=${email}`);
        console.log(data);
        if (data?.result?.modifiedCount > 0) {
          setRefetch(!refetch);
          swal("request rejected", {
            icon: "success",
          });
        }
      } else {
        swal("canceled!");
      }
    });
  };

  return (
    <main className=" my-10">
      <Heading
        subHeading={"Welcome Back"}
        title={"Here are all Sellers"}
      ></Heading>
      {/* total user and search inp section */}
      <section className=" flex justify-between items-center  mx-8 my-5">
        <h1 className="text-xl font-bold ">Total Sellers: {sellerCount}</h1>
        <div className="join border">
          <input
            onBlur={(e) => setSearch(e.target?.value)}
            type="text"
            placeholder="search user"
            className="input outline-none  join-item bg-base-100  font-bold"
          />
          <button className="btn  join-item flex items-center gap-2">
            Search <FaSearch></FaSearch>
          </button>
        </div>
      </section>
      {/* table section  */}
      <section className="overflow-x-auto mt-10 w-[90%] bg-base-100 mx-auto ">
        <table className="w-full p-6 text-base text-center whitespace-nowrap">
          <thead>
            <tr className=" border-b ">
              <th className="p-3 border-r border-gray-300">Image</th>
              <th className="p-3 border-r border-gray-300">Name</th>
              <th className="p-3 border-r border-gray-300">Email</th>
              <th className="p-3 border-r border-gray-300">
                Request Date Date
              </th>
              <th className="p-3 border-r border-gray-300">Description</th>

              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="border-b text-sm ">
            {/* {loading&&<SkeletonTable/>} */}
            {allSellers.map((sellerData, index) => (
              <tr className="border-b" key={index}>
                <td className="px-3 w-16 h-16 rounded-full border-r border-gray-400">
                  <Image
                    src={sellerData?.photo}
                    width={60}
                    height={60}
                    className=" w-full h-full"
                    alt={sellerData?.name}
                  ></Image>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{sellerData?.name}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p className="">{sellerData?.email}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{sellerData?.date}</p>
                </td>
                <td className="px-3 py-2 border-r border-gray-400">
                  <p>{sellerData?.description}</p>
                </td>
                <td className="px-3 py-2 flex gap-4">
                  <button
                    disabled={
                      sellerData?.status == "rejected" ||
                      sellerData?.status == "approved"
                    }
                    onClick={() =>
                      handleMakeSeller(sellerData?.name, sellerData?.email)
                    }
                    title="Approve"
                    className={` ${
                      sellerData?.status == "rejected" ||
                      sellerData?.status == "approved"
                        ? "btn-disabled"
                        : "btn-primary "
                    }`}
                  >
                    {sellerData?.status == "approved" && (
                      <span  className="flex items-center flex-row gap-2 "><FcApproval></FcApproval>  Approved</span>
                    )}
                     {sellerData?.status == "pending" && (
                      <span className="flex items-center flex-row gap-2 ">
                        {" "}
                        <IoMdPersonAdd></IoMdPersonAdd> Approve
                      </span>
                    )}
                     {sellerData?.status == "rejected" && (
                      <span className="flex items-center flex-row gap-2 ">
                        {" "}
                        <FaX></FaX> Rejected
                      </span>
                    )}
                    {" "}
                  </button>

                  {/* reject btn  */}
                  <button
                    disabled={
                      sellerData?.status == "rejected" ||
                      sellerData?.status == "approved"
                    }
                    onClick={() =>
                      handleRejectSeller(
                        sellerData?.name,
                        sellerData?.email,
                        sellerData?.type
                      )
                    }
                    title="Delete"
                    className="btn flex items-center gap-2 text-red-600"
                  >
                    <FaX></FaX> {sellerData?.status == "rejected" && "Rejected"}
                    {sellerData?.status == "approved" && "approved"}
                    {sellerData?.status == "pending" && "Reject"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div className=" flex w-full min-w-full">
            <SkeletonTable />
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
        />
      </section>
    </main>
  );
};

export default AllSeller;
