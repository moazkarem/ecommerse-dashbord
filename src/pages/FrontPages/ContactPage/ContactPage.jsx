import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../../components/Title page/TitlePage";
import Loading from "../../../components/Loading/Loading";

import { getCategoryColumns, style } from "./data";
import { useState } from "react";
import { useGetAllContacts } from "../../../hooks/useContacts";
import { useNavigate } from "react-router-dom";
import DelContact from "./DelContact";

const ContactPage = () => {
  const navigate = useNavigate();
  //===================== MODAL STATES ===========
  const [deletedContact, setDeletedContact] = useState({});

  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedContact(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const handelEdit = (blog) => {
    navigate(`/pages/blogs/${blog?.documentId}`);
  };

  const { data: contacts, isLoading } = useGetAllContacts();

  const columns = getCategoryColumns({
    onDelete: openModalDel,
    onView: handelEdit,
  });

  const rows = contacts?.map((contact, index) => ({
    ...contact,
    id: contact?.documentId || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Front Pages / "} page={"Contacts "} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      {/* <ViewContact
        key={deletedContact._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedBlog={deletedBlog}
      /> */}
      <DelContact
        key={deletedContact._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedContact={deletedContact}
      />
    </Box>
  );
};

export default ContactPage;
