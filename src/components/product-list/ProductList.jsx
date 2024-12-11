
import Product from "./Product"
import './Product-list.css'
// show all product from this product list
function ProductList({ allProduct }) {

    return (
        <div className="product-list">
            {/* fake data show  */}
            {
                [1, 2, 3, 4].map((product) => { // instead of loop on this ([1, 2, 3, 4]) loop on this (allProduct)
                    // do loop on each product
                    return <Product key={product} product={product} /> // product={product} => this is independent product
                })
            }
            {/* real data show */}
            {/* {
                allProduct && allProduct.map((product) => { // instead of loop on this ([1, 2, 3, 4]) loop on this (allProduct)
                    // do loop on each product
                    return <Product key={product} product={product} /> // product={product} => this is independent product
                })
            } */}
        </div>
    )
}

export default ProductList