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

            <div className='row m-3'>
                <div className="col-12" >
                    <h1>ArtShop Products</h1>
                </div>

                {/* List Products fectched below */}

                <div className="col-12 m-3" >
                    <div className='row'>
                        {products.map(product => (
                            <Product product={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>     
    </>
  )
}

export default ProductList