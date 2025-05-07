import React, { useState } from 'react'
import carData from "../data.js"
import Cars from './Cars.jsx'
import "./main.css"

function Main({ text }) {

    let [data, setData] = useState(carData)

    function sil(id) {
        setData(data.filter(item => item.id !== id))
    }

    let filteredCars = text
        ? data.filter(item => item.marka.toLowerCase().includes(text.toLowerCase()))
        : data

    return (
        <div className='container'>
            <div className="main_heading">
                <p>Get the Best Offers</p>
                <h2>Our <span> Featured </span> Cars</h2>
            </div>
            <Cars data={filteredCars ? filteredCars : data} sil={sil} />
        </div>
    )
}

export default Main
