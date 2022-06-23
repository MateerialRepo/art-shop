import React from 'react'

const Product = (props) => {
  return (
    <div className='col-md-3'>
        <div className="card-deck">
            <div className="card shadow-sm" key={props.id}>
                <img src={props.image_url} alt={props.title} className="card-img-top"/>

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>

                <div className='card-footer'>
                <b>{props.price_display}</b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product