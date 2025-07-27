import { useMutation, useQuery } from "@tanstack/react-query";

import {
  delContactApi,
  getAllContactsApi,
  getSingleContact,
} from "../api/contactPage";

//========= use get all heros

export const useGetAllContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getAllContactsApi,
  });
};
//========= use getsingle

export const useGetSingleContact = (id) => {
  return useQuery({
    queryKey: ["singlecontact", id],
    queryFn: () => getSingleContact(id),
  });
};

//========= use add hero

export const useDelContact = () => {
  return useMutation({
    mutationFn: delContactApi,
  });
};
