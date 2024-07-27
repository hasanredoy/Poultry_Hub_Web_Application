import React from 'react';

const usePagination = (count,itemsPerPage) => {
  const pages = Math.ceil(count/itemsPerPage)
  // console.log(pages);
  const totalPage=[]
  for(let i =0; i<pages;i++ ) {
     totalPage.push(i)
  }
  // console.log(totalPage);
  return [totalPage]
};

export default usePagination;