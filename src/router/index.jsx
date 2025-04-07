import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "../pages/Rootlayout/Rootlayout";
import Home from "../pages/HomePage/Home";
// import Labs from "../pages/Labs/Labs";
// import Departments from "../pages/Departments/Departments";
// import Patients from "../pages/Patients/Patients";
// import Rooms from "../pages/Rooms/Rooms";
// import Doctors from "../pages/Users/Doctors/Doctors";
// import Nursing from "../pages/Users/Nurse/Nursing";
// import LabManager from "../pages/Users/Lab Manager/LabManager";
// import RoomManager from "../pages/Users/Room Manager/RoomManager";
// import Roompatients from "../pages/Rooms/RoomPatients/Roompatients";
// import RoomTools from "../pages/Rooms/RoomTools/RoomTools";
// import Labpatients from "../pages/Labs/LabPatients/Labpatients";
// import LabTools from "../pages/Labs/LabTools/LabTools";
// import Pharmacy from "../pages/Pharmacy/Pharmacy";
// import Tools from "../pages/All Tools/Tools";
// import Supliers from "../pages/Supliers/Supliers";

// import InventoryPharmacy from "../pages/Inventory/Inventory pharmacy/InventoryPharmacy";
// import InventoryTool from "../pages/Inventory/Inventory Tool/InventoryTool";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      
    </Route>
  )
);

export default router;
