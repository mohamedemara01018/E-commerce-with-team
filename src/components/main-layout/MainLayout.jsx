import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"


function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}

export default MainLayout