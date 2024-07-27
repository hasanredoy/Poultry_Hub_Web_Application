'use client'
import { SessionProvider} from "next-auth/react";

const AuthProvider = ({children}) => {

  return (
    // wrap all children to get access of user 
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;