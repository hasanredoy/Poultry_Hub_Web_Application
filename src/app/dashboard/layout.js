import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return(
    <main className=" flex  justify-between m-0 p-0">
    <DashboardSidebar></DashboardSidebar>
    <div>
      {children}
    </div>
    </main>
  )
}