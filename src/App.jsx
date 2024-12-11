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
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryType" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />


    </div>
  )
}

export default App