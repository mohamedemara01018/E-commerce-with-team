

import { Link } from "react-router-dom"
import slider_img_1 from "../../assets/images/slider_img_1.jpg";

// {product} => this come from back-end
function Product({product}) { 

    return (
        // show all details here
        <Link to={`/product/productId}`}>
            <div className="img">
                <img src={slider_img_1} alt="" loading="lazy" />
                <h2 className="category">
                    category
                </h2>
            </div>
            <div className="product-info">
                <h1 className="brand"><span>Brand:</span>iphone</h1>
                <p className="product-title">iphone</p>
                <div className="price">
                    <p className="old-price">100$</p>
                    <p className="new-price">2$</p>
                    <p className="offer">2 % off</p>
                </div>
                <div className="line">

                </div>
            </div>
        </Link>
    )
}

export default Product