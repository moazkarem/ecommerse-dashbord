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
import ContactPage from "../pages/FrontPages/ContactPage/ContactPage";
import HeroSection from "../pages/FrontPages/HomePage/Hero/HeroSection";
import HeroEdit from "../pages/FrontPages/HomePage/Hero/HeroEdit";
import AddHero from "../pages/FrontPages/HomePage/Hero/AddHero";

import BannerOne from "../pages/FrontPages/HomePage/BannerOne/BannerOne";
import BannerTwo from "../pages/FrontPages/HomePage/Banner2/BannerTwo";
import AddBlog from "../pages/FrontPages/BlogsPage/AddBlog";
import EditBlog from "../pages/FrontPages/BlogsPage/EditBlog";
import ProtectedRoute from "../components/auth/ProtectedRoute";
const storageKey = "userData";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const isAdmin = userData && userData?.data?.role === "admin" ? true : false;
console.log(isAdmin , '====> is admin ');
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route
          index
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="categories"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="categories/subcategories"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <SubCategories />
            </ProtectedRoute>
          }
        />
        <Route
          path="brands"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Brands />
            </ProtectedRoute>
          }
        />
        <Route
          path="coupons"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Coupons />
            </ProtectedRoute>
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="users"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="reviews"
          element={
            <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
              <Reviews />
            </ProtectedRoute>
          }
        />

        <Route path="pages">
          <Route
            path="homepage"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage/hero"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <HeroSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage/hero/:id"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <HeroEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage/hero/addhero"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <AddHero />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage/banner1"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <BannerOne />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage/banner2"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <BannerTwo />
              </ProtectedRoute>
            }
          />
          <Route
            path="about"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <AboutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <BlogsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/add"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <AddBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/:id"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <EditBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="contact"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectPath="/login">
                <ContactPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>

      <Route
        path="login"
        element={
          <ProtectedRoute isAllowed={!isAdmin} redirectPath="/">
            <Login />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export default router;
