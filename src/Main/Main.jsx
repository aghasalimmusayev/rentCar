import React, { useState } from 'react'
import Cars from './Cars.jsx'
import "./main.css"
import GoTop from './GoTop.jsx'

function Main({ data, filteredCars, sil, addToCart }) {

    return (
        <div className='container'>
            <main>
                <div className="main_heading">
                    <p>Get the Best Offers</p>
                    <h2>Our <span> Featured </span> Cars</h2>
                </div>
                <Cars data={filteredCars ? filteredCars : data} sil={sil} addToCart={addToCart} />
                <GoTop />
            </main>
        </div>
    )
}

export default Main
