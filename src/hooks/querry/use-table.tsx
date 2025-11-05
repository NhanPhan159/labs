import apiUser from "@/apis/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useMutationTable = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiUser.addPayment();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["table"] });
    },
  });
};

const useTable = () => {
  return useQuery({
    queryKey: ["table"],
    queryFn: async () => {
      const data = await apiUser.fetchPayment();
      return data;
    },
  });
};

export default useMutationTable;
