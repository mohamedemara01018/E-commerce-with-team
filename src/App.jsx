
import './App.css'

// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/homepage/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/category-page/Category";
import Cart from "./pages/cart-page/Cart";
import SingleProduct from "./pages/Single-product-page/SingleProduct";
import Login from "./pages/login-page/Login";
import Register from "./pages/register-page/Register";
import Admin from "./pages/admin-page/Admin";
import MainLayout from "./components/main-layout/MainLayout";
import Dashboard from "./dashboard/page/dashboard-page/Dashboard";
import ProductDash from './dashboard/page/product-dash/ProductDash';
import UserDash from './dashboard/page/user-dash/UserDash';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/category/:categoryType" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/admin/dashboard" element={<Dashboard />} >
          <Route path={'product'} element={<ProductDash />} >
            <Route index path='insert' element={<div>insert</div>} />
            <Route index path='update' element={<div>update</div>} />
            <Route index path='delete' element={<div>delete</div>} />
          </Route>
          <Route index path='user' element={<UserDash />} />
        </Route >
      </Routes>
    </div>
  )
}

export default App