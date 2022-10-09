import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import './cart.css'
import Items from './Items'
import { products } from './products'

const Cart = () => {


    const [item, setItem] = useState(products);
    return (
        <div>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>Continue Shopping </h3>

                </div>


                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p> 7 </p>
                </div>


            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart </h1>
                <p className="total-times"></p> You have <span className="total-items-count"> 7 </span> items in the cart


                <div className="cart-items">

                    <Scrollbars>
                        {item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem} />
                        })}
                    </Scrollbars>


                </div>
            </section >
        </div >


    )
}

export default Cart
