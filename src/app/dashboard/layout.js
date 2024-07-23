import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return(
    <main className=" m-0 p-0 bg-base-200 ">
      <section className="flex  max-w-[95%] overflow-hidden lg:max-w-[90%] mx-auto ">
          <sidebar className={'w-[25%]'}>
     <DashboardSidebar></DashboardSidebar>
     </sidebar>
    <section className={'w-[74%]'}>

      {children}
    </section>
      </section>
   
    </main>
  )
}