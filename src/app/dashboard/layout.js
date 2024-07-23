import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return(
    <main className=" flex m-0 p-0">
     <sidebar className={'w-[20%]'}>
     <DashboardSidebar></DashboardSidebar>
     </sidebar>
    <section className={'w-[76%]'}>
      {children}
    </section>
    </main>
  )
}