'use client'
import UpdateItem from "@/Pages/Dashboard/common-admin-and-seller/update_item/UpdateItem";
import { useParams} from "next/navigation";

const page = () => {
  // NOTE: this is for update user
  const {id} = useParams()
  // console.log(id);
  return (
   <UpdateItem id={id}></UpdateItem>
  );
};

export default page;