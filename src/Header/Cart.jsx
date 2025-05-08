import React from 'react'
import "./cart.css"
import Counter from './Counter'

function closeCart() {
    $(".cart_box").slideUp()
}

function Cart({ carArr, azalt, coxalt, legvEt }) {

    let total = carArr.reduce((sum, item) => sum + (item.qiymet * item.count), 0)


    return (
        <div className='shopping_cart'>
            <div className='close_btn'>
                <i className="fa-solid fa-xmark" onClick={closeCart}></i>
            </div>
            <h3>Cart</h3>
            {carArr.map(item => (
                <div className='items' key={item.id}>
                    <div className='item_content'>
                        <div className="left_column">
                            <div className='item_img'>
                                <img src={item.img} alt="car" />
                            </div>
                            <div>
                                <h4 className='item_marka'>{item.marka} {item.model}</h4>
                                <p className='item_price'>Price {item.qiymet} ₼</p>
                                <button className='item_remove' onClick={() => legvEt(item.id)}><i className="fa-solid fa-trash"></i>Remove</button>
                            </div>
                        </div>
                        <div>
                            <div className="counter">
                                <Counter count={item.count} id={item.id} azalt={azalt} coxalt={coxalt} />
                            </div>
                            <p className='item_total'>{item.qiymet * item.count} ₼</p>
                        </div>
                    </div>
                </div>
            ))}
            <p>Total: {total ? total : 0} ₼</p>
            <div className='item_btn'>
                <button>Check out</button>
            </div>
        </div>
    )
}

export default Cart