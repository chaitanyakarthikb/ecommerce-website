import { createContext, useContext } from "react";

export const AppContext = createContext();

const a = {
  temp : '123'
}

const b = {
  rich : '456'
}

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{a,b}}>{children}</AppContext.Provider>;
};

export const useAppContext = ()=>{
  return useContext(AppContext);
}