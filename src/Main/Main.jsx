import React, { useState } from 'react'
import Cars from './Cars.jsx'
import "./main.css"

function Main({ data, filteredCars, sil, addToCart }) {

    return (
        <div className='container'>
            <div className="main_heading">
                <p>Get the Best Offers</p>
                <h2>Our <span> Featured </span> Cars</h2>
            </div>
            <Cars data={filteredCars ? filteredCars : data} sil={sil} addToCart={addToCart} />
        </div>
    )
}

export default Main
