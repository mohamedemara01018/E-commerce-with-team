import './Product_list.css'
import img from '../../../assets/images/shopping_cart.png'
import { useNavigate } from 'react-router-dom'
function Product_list() {
    const navigate = useNavigate()
    return (
        <div className='product-list'>
            <div className="product-list-content">
                <div className="product-list-title">
                    Product list
                </div>
                <div className="lists">
                    <div className="lists-header">
                        product list
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>



                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>



                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='td-product'>
                                    <div>
                                        <img src={img} alt="" width={50} />
                                        <span>name product</span>
                                    </div>
                                </td>
                                <td>iphone</td>
                                <td>100$</td>
                                <td>15%</td>
                                <td>123</td>
                                <td>
                                    <div>
                                        <button onClick={() => navigate('/admin/dashboard/product/add-edit/1')}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product_list