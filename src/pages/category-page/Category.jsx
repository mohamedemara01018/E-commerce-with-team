import ProductList from '../../components/product-list/ProductList'
import Title from '../../components/title/Title'
import './Category.css'


function Category() {
    return (
        <div className='category'>
            <div className="container">
                <div className="category-content">
                    <Title title={'category'} />
                    {
                        <ProductList allProduct={'array of objects '} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Category