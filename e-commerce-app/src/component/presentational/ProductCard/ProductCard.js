import React, { Component } from 'react';
import './ProductCard.css'  

const ProductCard = (props) => {
    const {name,price} = props
    return ( 

        <div className="card" style={{ margin : 40 , width: '40rem'}}>
            {//</div><img src="..." className="card-img-top" alt="...">
            }
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            
            </div>
        </div>

    )   
}
 
export default ProductCard;