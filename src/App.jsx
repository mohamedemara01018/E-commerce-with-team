import Header from "./components/header/Header"
import './App.css'

// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/homepage/Home";
function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App