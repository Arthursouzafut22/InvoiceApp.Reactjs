import { useQuery } from "react-query";
import axios from "axios";

const UsePayment = () => {
  const paymentDados = async () => {
    const response = await axios.get("dados.json");
    if (!response.ok) throw new Error("Erro em chamada!");
    return response?.data;
  };

  const query = useQuery({
    queryFn: paymentDados,
    queryKey: ["pay-dados"],
  });

  return query;
};

export default UsePayment;
