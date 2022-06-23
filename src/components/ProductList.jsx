import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './Product';


const ProductList = () => {
    const [pagination, setPagination] = useState({});
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(`https://api.artic.edu/api/v1/products?page=`);
            setPagination(data.pagination);
            setPageCount(pagination.total_pages);
            setProducts(data.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchProducts();
    }, []);



  return (
    <>
        <div className='container'>
            {/* List Products fectched below */}

            <div className="col-12 m-3" >
                <div className="row product">
                        
                    {products.map(product => (
                        <Product 
                            key={product.id} 
                            image={product.image_url} 
                            title={product.title} 
                            description={product.description} 
                            price={product.price_display}
                        />
                    ))}
                    </div>
                    </div>
                </div> 
    </>
  )
}

export default ProductList