
import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";
import DashboardNav from "@/Pages/Dashboard/DashboardNav/DashboardNav";
export default function DashboardLayout({ children }) {

  return(
    <main className=" m-0 p-0 bg-base-200 ">
      <section className="flex  max-w-[95%] overflow-hidden lg:max-w-[90%] mx-auto ">
          <sidebar className={' w-0 lg:w-[25%]'}>
     <DashboardSidebar></DashboardSidebar>
     </sidebar>
    <section className={'w-[98%] mx-auto min-h-screen lg:mx-0 lg:w-[74%]'}>
     <DashboardNav></DashboardNav>
      {children}
    </section>
      </section>
   
    </main>
  )
}