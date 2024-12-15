import Header from "./components/header/Header"
import './App.css'

// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/homepage/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Category from "./pages/category-page/Category";
import Cart from "./pages/cart-page/Cart";
import SingleProduct from "./pages/Single-product-page/SingleProduct";
import Login from "./pages/login-page/Login";
import Register from "./pages/register-page/Register";
import Admin from "./pages/admin-page/Admin";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/category/:categoryType" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />


    </div>
  )
}

export default App