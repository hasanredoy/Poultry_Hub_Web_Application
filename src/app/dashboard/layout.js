import DashboardSidebar from "@/Pages/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return(
    <body className=" flex m-0 p-0">
     <sidebar className={'w-[20%]'}>
     <DashboardSidebar></DashboardSidebar>
     </sidebar>
    <main className={'w-[76%]'}>
      {children}
    </main>
    </body>
  )
}