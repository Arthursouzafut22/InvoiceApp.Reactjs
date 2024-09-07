import { createContext, useState } from "react";
import { useResquestAxiosGet } from "./UsePayment";

export const ContextPayment = createContext();

const GlobalPayment = ({ children }) => {
  const { data, isLoading, error } = useResquestAxiosGet();
  const [activeForm, setActiveForm] = useState(true);

  return (
    <ContextPayment.Provider
      value={{ data, isLoading, error, activeForm, setActiveForm }}
    >
      {children}
    </ContextPayment.Provider>
  );
};

export default GlobalPayment;
