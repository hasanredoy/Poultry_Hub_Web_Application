import Generate_Idea from "@/Pages/Generate_Idea/Generate_Idea";
export const metadata = {
  title: "Generate Idea",
  description: "poultry hub generate idea page, in this page user can generate ideas for their poultry farm with help of AI",
};
const page = () => {
  
  return (
    <div className="mt-[54px] lg:mt-[54px]  ">
      <Generate_Idea></Generate_Idea>
    </div>
  );
};

export default page;