import { useQuery } from "react-query";

const useFetchedData = (queryName: string) => {
  const queryClient = useQuery(queryName, {
    refetchOnWindowFocus: true,
    enabled: false,
  });

  return queryClient;
};

export default useFetchedData;
