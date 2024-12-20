import { Outlet, Navigate } from 'react-router-dom'
import HeaderDash from '../../components/header-dash/HeaderDash'
import SidebarDash from '../../components/sidebar-dash/SidebarDash'
import './Dashboard.css'
function Dashboard() {
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(admin)
    if (!admin) {
        return <Navigate to={'/login'} />
    }
    return (
        <div>
            <HeaderDash />
            <div className="home-dash">
                <SidebarDash />
                <Outlet />
            </div>

        </div>
    )
}

export default Dashboard