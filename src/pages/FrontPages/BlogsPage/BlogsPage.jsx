import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";
import Loading from "../../../components/Loading/Loading";

import { getCategoryColumns, style } from "./data";
import { useState } from "react";
import { useGetAllBlogs } from "../../../hooks/useBlogs";
import { useNavigate } from "react-router-dom";
// import { useGetBrands } from "../../hooks/useBrands";
// import DelBrand from "./DelBrand";

const BlogsPage = () => {
  const navigate = useNavigate();
  //===================== MODAL STATES ===========
  const [deletedBrand, setDeletedBrand] = useState({});

  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedBrand(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const handelEdit = (blog) => {
    navigate(`/pages/blogs/${blog?.documentId}`);
  };

  const handelAdd = (blog) => {
    navigate(`/pages/blogs/add`);
  };

  const { data: blogs, isLoading } = useGetAllBlogs();

  const columns = getCategoryColumns({
    onDelete: openModalDel,
    onEdit: handelEdit,
  });

  const rows = blogs?.map((blog, index) => ({
    ...blog,
    id: blog?.documentId || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Front Pages  "} page={"Blogs"} />
      <AddButton add={handelAdd} title={"Add New Brand"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      {/* 
      <DelBrand
        key={deletedBrand._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedBrand={deletedBrand}
      /> */}
    </Box>
  );
};

export default BlogsPage;
