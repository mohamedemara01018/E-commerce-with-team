import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to={'/'}>
                    <div className="snap">
                        <span><i className="fa-solid fa-bag-shopping"></i> Snap</span>Up.
                    </div>
                </Link>

            </div>
            <div className="navbar-middle">
                <div className="navbar-middle-top">
                    <div className="input">
                        <input type="text" placeholder="search here" />
                        <Link to={'/search'}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </div>
                </div>
                <div className="navbar-middle-bottom">
                    <ul>
                        <li>
                            <Link to={'/category/categoryType'}>
                                fake data
                            </Link>
                        </li>
                        <li>
                            <Link to={'/category/categoryType'}>
                                fake data
                            </Link>
                        </li>
                        <li>
                            <Link to={'/category/categoryType'}>
                                fake data
                            </Link>
                        </li>
                        <li>
                            <Link to={'/category/categoryType'}>
                                fake data
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="navbar-right">
                <Link to={'/cart'} className="cart-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="count-cart">
                        0
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar