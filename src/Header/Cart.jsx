import React from 'react'
import "./cart.css"

function closeCart() {
    $(".cart_box").slideUp()
}

function Cart() {
    return (
        <div className='shopping_cart'>
            <div className='close_btn'>
                <i class="fa-solid fa-xmark" onClick={closeCart}></i>
            </div>
            <h3>Cart</h3>
            <div className='items'>
                <div className='item_content'>
                    <div className='item_img'>
                        <img src="" alt="" />
                        <p className='item_price'>Price</p>
                    </div>
                    <span>Count</span>
                    <p className='item_total'>Item Total</p>
                </div>
                <div className='item_content'>
                    <div className='item_img'>
                        <img src="" alt="" />
                        <p className='item_price'>Price</p>
                    </div>
                    <span>Count</span>
                    <p className='item_total'>Item Total</p>
                </div>
            </div>
            <p>Total price</p>
            <div className='item_btn'>
                <button>Check out</button>
            </div>
        </div>
    )
}

export default Cart