import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 15)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    // console.log(fakeData);

    //First Button Handle Declare   
    const handleAddCart = (product) => {
        // console.log('product Added', product); 
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
           <div className="product-container">
                {
                    // Button Handle Product Component 
            products.map(product=> <Product handleAddCart={handleAddCart} product={product}></Product>)
                }
           </div>

           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;