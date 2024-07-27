import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Pagination = ({ totalPage, currentPage, setCurrentPage,pages }) => {
  console.log(totalPage);
  const handleNext=()=>{
    if(currentPage<pages-1){
      setCurrentPage(currentPage+1)
    }
  }
  const handlePrev=()=>{
    if(currentPage>0){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <main className="  py-2 my-5 flex justify-center items-center gap-3">
      <button onClick={handlePrev} className=" btn">
        <FaLessThan className=" text-xl"></FaLessThan>
      </button>
      <div className=" flex gap-3">
        {totalPage.map((page, index) => (
          <button onClick={() => setCurrentPage(page)} className={`btn mx-3 ${page==currentPage&&"btn-primary"} `}>
            {index}
          </button>
        ))}
      </div>
      <button onClick={handleNext} className=" btn text-xl">
        <FaGreaterThan></FaGreaterThan>{" "}
      </button>
    </main>
  );
};

export default Pagination;
