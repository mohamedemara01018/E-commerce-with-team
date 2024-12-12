
import './SingleProduct.css'
import img from '../../assets/images/slider_img_1.jpg'
import Quantity_inc_dec from '../../components/Quantity-inc-dec/Quantity_inc_dec'
function SingleProduct() {

    return (
        <div className='single-product'>
            <div className="container">
                <div className="single-product-content">
                    <div className="single-product-img-cover">
                        <img src={img} alt="" />
                    </div>


                    <div className="single-product-details">
                        <div className="single-product-title">
                            title
                        </div>


                        <div className="desc-other">
                            <div className="desc">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, sit nisi. Ipsa illum exercitationem vel quasi earum sapiente alias. Doloremque!
                            </div>
                            <div className="r-b-c">
                                <div className="r">
                                    <span>Rating:</span> 22
                                </div>
                                <div className="b">
                                    <span>Brand:</span> iphone
                                </div>
                                <div className="c">
                                    <span>Category:</span> beaty
                                </div>
                            </div>
                        </div>

                        <div className="price-offer">
                            <div className="price">
                                <del>3434</del> (Inclusive of all taxes)
                            </div>
                            <div className="offer">
                                $333
                                <span>34334% OFF</span>
                            </div>
                        </div>
                        <div className="quantity-btns">
                            <div className="quantity">
                                <span>Quantity: </span> <Quantity_inc_dec quantity={1} increase={() => 1} decrease={() => 2} />
                            </div>
                            <div className="btns">
                                <button>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    add to cart
                                </button>
                                <button>
                                    buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct