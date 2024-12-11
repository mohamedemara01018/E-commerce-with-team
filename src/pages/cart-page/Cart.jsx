
import './Cart.css'
import img from '../../assets/images/slider_img_1.jpg'
import Quantity_inc_dec from '../../components/Quantity-inc-dec/Quantity_inc_dec'
import { useState } from 'react'
function Cart() {
    const [quantity, setQuantity] = useState(1);
    function handleIcrease() {
        setQuantity(
            (prev) => prev + 1
        )
    }
    function handleDerease() {
        setQuantity(
            (prev) => {
                if (prev > 1) {
                    return prev - 1
                } else {
                    return prev
                }
            }
        )
    }
    console.log(quantity)
    return (
        <div className='cart'>
            <div className="container">
                <div className="cart-content">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    S.N.
                                </th>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Product
                                </th>
                                <th>
                                    Unit price
                                </th>

                                <th>
                                    Quantity
                                </th>

                                <th>
                                    Total price
                                </th>
                                <th>
                                    actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>
                                    <img src={img} alt='img' width={50} />
                                </td>
                                <td>iphone</td>
                                <td>10$</td>
                                <td>100$</td>
                                <td><Quantity_inc_dec quantity={quantity} increase={() => handleIcrease} decrease={() => handleDerease} /></td>
                                <td>
                                    <button>
                                        Delete
                                    </button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                    <div className="cart-content-bottom">

                        <button >
                            <i className="fa-solid fa-trash"></i>
                            <div>
                                CLEAR CART
                            </div>
                        </button>

                        <div className="total-price">
                            <div className="total">
                                Total({200} Items): <span>$200</span>
                            </div>
                            <div className="btn">
                                <button>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart