import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  console.log(totalPage);
  return (
    <main className=" flex justify-center items-center gap-3">
      <button className=" btn">
        <FaLessThan className=" text-xl"></FaLessThan>
      </button>
      <div className=" flex gap-3">
        {totalPage.map((page, index) => (
          <button onClick={() => setCurrentPage(page)} className={`btn mx-3 ${page==currentPage&&"btn-primary"} `}>
            {index}
          </button>
        ))}
      </div>
      <button className=" btn text-xl">
        <FaGreaterThan></FaGreaterThan>{" "}
      </button>
    </main>
  );
};

export default Pagination;
