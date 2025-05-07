import React from 'react'
import "./cars.css"

function Cars({ data, sil }) {

    return (
        <div className='car_models'>
            {data.map(item => (
                <div className='car' key={item.id}>
                    <img src={item.img} alt="car" />
                    <h3 className='car_model'>{item.marka} {item.model}</h3>
                    <p className='car_price'>{item.qiymet} azn</p>
                    <p className='car_motor'>Motor {item.mator} L</p>
                    <p className='car_year'><i class="fa-solid fa-calendar-days"></i> {item.il}</p>
                    <p className='car_color'><i class="fa-solid fa-palette"></i> {item.reng}</p>
                    <button onClick={() => sil(item.id)}>DELETE</button>
                    <button>ADD TO CART</button>
                </div>
            ))}
        </div>
    )
}

export default Cars
