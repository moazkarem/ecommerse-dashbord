import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "../pages/Rootlayout/Rootlayout";
import Home from "../pages/HomePage/Home";
import Categories from "../pages/Categories/Categories";
import Login from "./../pages/Login/Login";
import Brands from "../pages/Brands/Brands";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

export default router;
