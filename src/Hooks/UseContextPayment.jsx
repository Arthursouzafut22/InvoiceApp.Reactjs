import { createContext } from "react";
import { useResquestAxiosGet } from "./UsePayment";

export const ContextPayment = createContext();

const GlobalPayment = ({ children }) => {
  const { data, isLoading, error } = useResquestAxiosGet();

  return (
    <ContextPayment.Provider value={{ data, isLoading, error }}>
      {children}
    </ContextPayment.Provider>
  );
};

export default GlobalPayment;
