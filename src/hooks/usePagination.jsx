
const usePagination = (count,itemsPerPage) => {
  const pages = Math.ceil(count/itemsPerPage)
  // //console.log(pages);
  let totalPage=[]
  for(let i =0; i<pages;i++ ) {
     totalPage.push(i)
  }
  // //console.log(totalPage);
  return [totalPage,pages]
};

export default usePagination;