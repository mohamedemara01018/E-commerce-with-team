import { Outlet } from 'react-router-dom'
import './ProductDash.css'

function ProductDash() {
    return (
        <div className='product-dash'>
            <div className="container">
                <div className="product-dash-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProductDash