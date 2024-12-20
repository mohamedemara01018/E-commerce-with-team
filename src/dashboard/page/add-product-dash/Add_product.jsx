import Select_img from '../../components/select-image-dash/Select_img'
import './Add_product.css'

function Add_product() {
    return (
        <div className='add-product'>
            <div className="add-product-content">
                <div className="add-product-title">
                    Add Product
                </div>
                <div className="add-product-inputs">
                    <div className="add-product-left">
                        <div className="input-name">
                            <label htmlFor="name">Name</label>
                            <input id='name' type='text' placeholder='Name' />
                        </div>
                        <div className="input-category-brand">
                            <div >
                                <label htmlFor="catgory">Category</label>
                                <select id='catgory' className='input-category'>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brand">Brand</label>
                                <select className='input-brand'>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-desc">
                            <label htmlFor="textarae">Description</label>
                            <textarea name="" id="" placeholder='Write Description Here'></textarea>
                        </div>
                    </div>
                    <div className="add-product-right">
                        <div className="add-product-price-discount">
                            <div>
                                <label htmlFor="price">Price</label>
                                <input type="text" placeholder='Price' />
                            </div>
                            <div>
                                <label htmlFor="discount">Discount</label>
                                <input id='discount' type="text" placeholder='Discount in %'/>
                            </div>

                        </div>
                        <div className='input-files'>
                            <label htmlFor="">Images</label>
                            <Select_img />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Add_product