import { useQuery } from "react-query";

const paymentDados = async () => {
  const response = await fetch("dados.json");
  return response.json();
};

export const useResquestAxiosGet = () => {
  const query = useQuery({
    queryFn: paymentDados,
    queryKey: ["pay-dados"],
  });

  return query;
};
