import React from 'react'
import "./cars.css"

function Cars({ data, sil }) {
    if (!data || !Array.isArray(data)) {
        return <p>Data yoxdur və ya düzgün deyil</p>
    }
    return (
        <div className='car_models'>
            {data.map(item => (
                <div className='car' key={item.id}>
                    <img src={item.img} alt="car" />
                    <h3>{item.marka}</h3>
                    <h3>{item.model}</h3>
                    <p>{item.price}</p>
                    <p>{item.motor}</p>
                    <p>{item.il}</p>
                    <p>{item.reng}</p>
                    <button onClick={() => sil(item.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Cars
