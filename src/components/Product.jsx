import React from 'react'
import parse from 'html-react-parser';


const Product = ({id, image, title, description, price}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card-deck">
            <div className="card shadow-sm" key={id}>
                <img src={image} alt={title} className="card-img-top"/>

                <div className="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h5>{title}</h5></li>
                        <li class="list-group-item">{parse(price)}</li>
                    </ul>
                    {/* <span className="card-title mx-3 h5 text-center">{title}</span>
                    <span className='card-text'><b>{parse(price)}</b></span> */}

                    <div className='card-text'>
                    {/* {parse(description)} */}
                    </div>
                    
                    {/* <button className='btn btn-success'>
                    <span className='card.text text-center'>{parse(product.price_display)}</span>
                    </button> */}
                </div>

                {/* <div className='card-footer'>
                <b>{parse(price)}</b>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Product