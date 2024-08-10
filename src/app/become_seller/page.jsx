import BecomeSeller from "@/Pages/BecomeSeller/BecomeSeller";

export const metadata = {
  title: "Become Seller",
  description: "poultry hub become  seller  page, where user can become seller by doing a simple task  . ",
};
const page = () => {
  return (
    <main className=" my-10 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto mt-[54px] lg:mt-[54px]  ">
    <BecomeSeller></BecomeSeller>
    </main>
  );
};

export default page;