import './Quantity_inc_dec.css'

function Quantity_inc_dec({ quantity, increase, decrease }) {
    return (
        <div className='quantity-inc-dec'>
            <div>
                <button onClick={decrease()}>
                    <i className="fa-solid fa-minus"></i>
                </button>
            </div>
            <div>
                {quantity}
            </div>
            <div>
                <button onClick={increase()}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default Quantity_inc_dec