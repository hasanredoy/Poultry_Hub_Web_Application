import Navbar from "@/components/Navbar/Navbar";
import Main from "@/layout/Main";

export default function Home() {

  return (
    <main className="">
       <nav className=" bg-base-300 bg-opacity-80 fixed w-full z-50  top-0 shadow-lg  shadow-black">
          <Navbar></Navbar>
        </nav>
      <Main></Main>
    </main>
  );
}
