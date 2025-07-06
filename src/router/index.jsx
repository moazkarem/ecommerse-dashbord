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
import Coupons from "../pages/Coupons/Coupons";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
import Reviews from "../pages/Reviews/Reviews";
import SubCategories from "../pages/SubCategories/SubCategories";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="/categories/subcategories" element={<SubCategories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

export default router;
