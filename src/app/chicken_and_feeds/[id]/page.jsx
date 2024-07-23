'use client'
import DetailsPage from "@/Pages/ChickenAndFeeds/DetailsPage/DetailsPage";
import { useParams } from "next/navigation";

const page = () => {
  const {id} = useParams()
  return (
    <div className="mt-[54px] lg:mt-[54px]  ">
      <DetailsPage id={id}></DetailsPage>
    </div>
  );
};

export default page;