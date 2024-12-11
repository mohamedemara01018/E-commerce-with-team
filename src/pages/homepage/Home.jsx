
import './Home.css'
import Headingslider from '../../components/slider/Slider'
import ProductList from '../../components/product-list/ProductList'
import Title from '../../components/title/Title'

function Home() {
    return (
        <div className='home'>
            <Headingslider />
            <div className="container">
                    <Title title={'products'} />
                <div className="home-content">
                    <ProductList allProduct={'product => array of objects'} />
                </div>
            </div>
        </div>
    )
}

export default Home