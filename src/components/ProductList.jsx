import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Product from './Product';


const ProductList = () => {
    const [pagination, setPagination] = useState({});
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const fetchProducts = async (currentPage) => {
        try {
            const {data} = await axios.get(`https://api.artic.edu/api/v1/products?page=${currentPage}`);
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

    const handlePageClick = (data) => {
        console.log(data.selected);
        fetchProducts(data.selected + 1);
    }
    

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

            <div className='row mt-2 mx-2'>
                <ReactPaginate 
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={4}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}

                />
            </div>
        </div> 
    </>
  )
}

export default ProductList