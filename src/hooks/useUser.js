import { useMutation, useQuery } from "@tanstack/react-query";

import { getUsersApi, addUserApi, editUserApi, delUserApi } from "../api/users";

//============ GET USERS HOOK ======

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });
};
//============ ADD USERS HOOK ======

export const useAddUser = () => {
  return useMutation({
    mutationFn: addUserApi,
  });
};

//============ DEL USERS HOOK ======
export const useDelUser = () => {
  return useMutation({
    mutationFn: delUserApi,
  });
};

//============ EDIT USERS HOOK ======

export const useEditUser = () => {
  return useMutation({
    mutationFn: editUserApi,
  });
};
