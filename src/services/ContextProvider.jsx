'use client'
import { createContext } from "react";

export const GeneralContext = createContext(null)
const ContextProvider = ({children}) => {
  const contextInfo ={
    name:'hossain'
  }
  return (
    <GeneralContext.Provider value={contextInfo}>
      {children}
    </GeneralContext.Provider>
  );
};

export default ContextProvider;