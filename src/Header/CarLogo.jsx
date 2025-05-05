import React from 'react'
import kia from "../img/kia-logo.png"
import bmw from "../img/bmw-logo.png"
import lexus from "../img/lexus-logo.png"
import mercedes from "../img/mercedes-logo.png"
import toyota from "../img/Toyota-logo.png"
import rangeRover from "../img/range-rover-logo.png"
import mitsubishi from "../img/Mitsubishi-logo.png"
import hyundai from "../img/hyundai-logo.png"
import ford from "../img/ford-logo.png"

function CarLogo() {
    return (
        <div className='car_logos'>
            <img src={kia} alt="carLogo" />
            <img src={bmw} alt="carLogo" />
            <img src={lexus} alt="carLogo" />
            <img src={mercedes} alt="carLogo" />
            <img src={toyota} alt="carLogo" />
            <img src={rangeRover} alt="carLogo" />
            <img src={mitsubishi} alt="carLogo" />
            <img src={hyundai} alt="carLogo" />
            <img src={ford} alt="carLogo" />
        </div>
    )
}

export default CarLogo