import { useSession } from "next-auth/react";

const useGetUser = () => {
  const session = useSession()
  const user = session?.data?.user
  return user
};

export default useGetUser;