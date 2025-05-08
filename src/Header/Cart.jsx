import React from 'react'
import "./cart.css"
import Counter from './Counter'

function closeCart() {
    $(".cart_box").slideUp()
}

function Cart({ carArr, azalt, coxalt }) {

    return (
        <div className='shopping_cart'>
            <div className='close_btn'>
                <i className="fa-solid fa-xmark" onClick={closeCart}></i>
            </div>
            <h3>Cart</h3>

            {carArr.map(item => (
                <div className='items' key={item.id}>
                    <div className='item_content'>
                        <div className='item_img'>
                            <img src={item.img} alt="car" />
                        </div>
                        <div>
                            <h4 className='item_marka'>{item.marka} {item.model}</h4>
                            <p className='item_price'>{item.qiymet} ₼</p>
                        </div>
                        <span>{item.count}</span>
                        <Counter count={item.count} id={item.id} azalt={azalt} coxalt={coxalt} />
                        <p className='item_total'>Item Total</p>
                    </div>
                </div>
            ))}

            <p>Total price</p>
            <div className='item_btn'>
                <button>Check out</button>
            </div>
        </div>
    )
}

export default Cart