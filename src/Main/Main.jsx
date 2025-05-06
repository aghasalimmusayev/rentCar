import React, { useEffect, useState } from 'react'
import carData from "../data.js"
import Cars from './Cars.jsx'

function Main() {

    let [data, setData] = useState(carData)

    function sil(id){
        setData(data.filter(item => item.id !== id))
    }

    return (
        <div className='container'>
            <Cars data={data} sil={sil}/>
        </div>
    )
}

export default Main
