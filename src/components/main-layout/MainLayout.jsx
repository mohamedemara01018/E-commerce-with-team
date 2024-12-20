import { Navigate, Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"



function MainLayout() {
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(admin)
    if (admin) {
        return <Navigate to={'/admin/dashboard/product/add-edit/add'} />
    }
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout