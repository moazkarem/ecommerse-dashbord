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
// import FrontPages from "../pages/FrontPages/FrontPages";
import HomePage from "../pages/FrontPages/HomePage/HomePage";
import AboutPage from "../pages/FrontPages/AboutPage/AboutPage";
import BlogsPage from "../pages/FrontPages/BlogsPage/BlogsPage";
import ContactPage from "../pages/FrontPages/ContactPage/Contact";
import HeroSection from "../pages/FrontPages/HomePage/Hero/HeroSection";
import HeroEdit from "../pages/FrontPages/HomePage/Hero/HeroEdit";

import BannerOne from "../pages/FrontPages/HomePage/BannerOne/BannerOne";
import BannerTwo from "../pages/FrontPages/HomePage/Banner2/BannerTwo";
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
        <Route path="/pages">
          <Route path="homepage" element={<HomePage />} />
          <Route path="/pages/homepage/hero" element={<HeroSection />} />
          <Route path="/pages/homepage/hero/:id" element={<HeroEdit />} />
          <Route path="/pages/homepage/banner1" element={<BannerOne />} />
          <Route path="/pages/homepage/banner2" element={<BannerTwo />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

export default router;
