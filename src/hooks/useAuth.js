import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth";
export const useAuthQuery = () => {
  return useMutation({
    mutationFn: loginApi,
  });
};
