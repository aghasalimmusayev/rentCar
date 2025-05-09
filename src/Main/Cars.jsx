import React from 'react'
import "./cars.css"

function Cars({ data, carArr, sil, addToCart }) {

    function cartdaVar(id){
        return carArr.find(item => item.id === id) ? false : true
    }
    
    return (
        <div className='car_models'>
            {data.map(item => (
                <div className='car' key={item.id}>
                    <img src={item.img} alt="car" />
                    <h3 className='car_model'>{item.marka} {item.model}</h3>
                    <p className='car_price'>{item.qiymet} azn</p>
                    <p className='car_motor'>Motor {item.mator} L</p>
                    <p className='car_year'><i className="fa-solid fa-calendar-days"></i> {item.il}</p>
                    <p className='car_color'><i className="fa-solid fa-palette"></i> {item.reng}</p>
                    <button onClick={() => sil(item.id)}>DELETE</button>
                    <button onClick={() => addToCart(item.id)}>
                        {cartdaVar(item.id) ? "ADD TO CART" : "IN YOUR CART"}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cars
