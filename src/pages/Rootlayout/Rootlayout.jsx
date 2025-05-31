import { useState } from "react";
 import Box from "@mui/material/Box";
 import CssBaseline from "@mui/material/CssBaseline";
 import Appbar from "../../components/App Bar/Appbar";
 import Sidebar from "../../components/Side Bar/Sidebar";
 import Contentdashbord from "../../components/Content dashbord/Contentdashbord";
 const Rootlayout = () => {
   const [open, setOpen] = useState(true);
   return (
    
       <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <Appbar open={open} setOpen={setOpen}  />
         <Sidebar open={open} setOpen={setOpen} />
         <Contentdashbord />
       </Box>
  
   );
 };
 export default Rootlayout;