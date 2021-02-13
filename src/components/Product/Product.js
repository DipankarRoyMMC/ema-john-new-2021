import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartPlus, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name, stock, price, img, seller} = props.product;

    return (
        
        <div className="item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="item-des">
                <h3>Name: {name}</h3>
                <p><small>By: {seller}</small></p>
                <h5>Price:$ {price}</h5>
                <p><small>Only {stock} left in stock - order soon</small></p>

                {/* Second Receive Data From Btn onClick  with props by sending  */}
                <button onClick={ () => props.handleAddCart(props.product)} className="orderBtn">
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;