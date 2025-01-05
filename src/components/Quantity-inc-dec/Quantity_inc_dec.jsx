import { useState } from 'react';
import './Quantity_inc_dec.css'

function Quantity_inc_dec() {
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
    return (
        <div className='quantity-inc-dec'>
            <div>
                <button onClick={handleDerease}>
                    <i className="fa-solid fa-minus"></i>
                </button>
            </div>
            <div>
                {quantity}
            </div>
            <div>
                <button onClick={ handleIcrease}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default Quantity_inc_dec