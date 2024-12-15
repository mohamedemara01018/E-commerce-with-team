import { Link } from 'react-router-dom'
import './Header.css'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <div className="header-top">
                        <div className="header-top-left">
                            <ul>
                                <li>
                                    <Link to={'/Seller Center'}>
                                        Seller Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Download'}>
                                        Download
                                    </Link>
                                </li>
                                <li>
                                    <a >
                                        Follow Us On
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target='_blank'>
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target='_blank'>
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-top-right">
                            <ul>
                                <li>
                                    <Link to={'/admin'}>
                                        Admin
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/register'}>
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/login'}>
                                        Log in
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header