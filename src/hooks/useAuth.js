import { useQuery } from "@tanstack/react-query";
import { loginApi } from "../api/auth";
export const useAuthQuery = (data) => {
  const authQuery = useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      loginApi(data);
    },
  });
  return authQuery;
};
