
import LinksForLargeDevice from "./NavLinks/LinksForLargeDevice";
import LinksForSmallDevice from "./NavLinks/LinksForSmallDevice";

const DashboardSidebar = () => {

  return (
    <div className=" w-full">
     {/* links for small devices */}
     <div className=" block lg:hidden">
     <LinksForSmallDevice></LinksForSmallDevice>
     </div>
      {/* links for lg  */}
     <div className=" hidden lg:block">
      <LinksForLargeDevice></LinksForLargeDevice>
     </div>
     
    </div>
  );
};

export default DashboardSidebar;
