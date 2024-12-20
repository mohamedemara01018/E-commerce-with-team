import { Outlet, } from 'react-router-dom'
import HeaderDash from '../../components/header-dash/HeaderDash'
import SidebarDash from '../../components/sidebar-dash/SidebarDash'
import './Dashboard.css'
import { useEffect } from 'react'
function Dashboard() {

    useEffect(() => {

    }, [])
    window.history.replaceState(null, '', window.location.href)
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