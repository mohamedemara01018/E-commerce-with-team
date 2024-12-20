import { useRef, useState } from 'react';
import './Add_product.css'

function Add_product() {
    const [images, setImages] = useState([]);
    const inputRef = useRef(null);
    const paraRef = useRef(null);
    function handleParaClick() {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    function handleInputChange(event) {
        const files = Array.from(event.target.files);
        const imageUrl = files.map((file) => URL.createObjectURL(file));
        setImages([...images, imageUrl])
    }
    function handleFilterImages(ind) {
        const filterdImage = images.filter((image, idx) => {
            return ind != idx
        })
        setImages(filterdImage)
    }
    console.log(images)
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
                                    <option value="">Category</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brand">Brand</label>
                                <select className='input-brand'>
                                    <option value="">Brand</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                    <option value="">opq</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-stock-created'>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <input id='stock' type="text" placeholder='Stock' />
                            </div>
                            <div>
                                <label htmlFor="created-at">Created at</label>
                                <input id='created-at' type="text" placeholder='dd/mm/yy' />
                            </div>
                        </div>
                        <div className="input-desc">
                            <label htmlFor="textarae">Description</label>
                            <textarea name="" id="textarae" placeholder='Write Description Here'></textarea>
                        </div>
                    </div>
                    <div className="add-product-right">
                        <div className="add-product-price-discount">
                            <div>
                                <label htmlFor="price">Price</label>
                                <input id="price" type="text" placeholder='Price' />
                            </div>
                            <div>
                                <label htmlFor="discount">Discount</label>
                                <input id='discount' type="text" placeholder='Discount in %' />
                            </div>
                        </div>
                        <div className='input-files'>
                            <label htmlFor="">Images</label>
                            {images.length < 6 && <div className="select_img">
                                <input ref={inputRef} type="file" onChange={handleInputChange} />
                                <p onClick={handleParaClick} ref={paraRef}>Drag & Drop your files here or click.<br /><span>The maximum number of image is 6</span></p>
                            </div>}
                            <div className='images'>
                                {
                                    images && images.map((image, ind) => {
                                        return <div key={ind} className='image'>
                                            <i className="fa-solid fa-x" onClick={() => handleFilterImages(ind)}></i>
                                            <img src={image} alt={'img' + ind} />
                                        </div>
                                    })
                                }
                            </div>
                            <div className="btn">
                                <button>Add Product <i className="fa-solid fa-plus"></i></button>
                                <button>Edit Product <i className="fa-solid fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_product