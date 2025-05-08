import { useState } from 'react'
import carData from "./data.js"
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'

function App() {

  let [text, setText] = useState("")
  let [data, setData] = useState(carData)
  let [carArr, setcarArr] = useState([])

  function sil(id) {
    setData(data.filter(item => item.id !== id))
  }

  function addToCart(id) {
    let carVarsa = carArr.find(item => item.id == id)
    if (carVarsa) {
      let carArtir = carArr.map(item => item.id == id ? { ...item, count: item.count + 1 } : item)
      setcarArr(carArtir)
    }
    else {
      let car = data.find(item => item.id == id)
      setcarArr([...carArr, { ...car, count: 1 }])
    }
  }

  function legvEt(id){
    setcarArr(carArr.filter(item => item.id != id))
  }

  function azalt(id) {
    let carSelected = carArr.map(item => item.id == id && item.count > 1 ? { ...item, count: item.count - 1 } : item)
    setcarArr(carSelected)
  }
  function coxalt(id) {
    let carSelected = carArr.map(item => item.id == id && item.count < 10 ? { ...item, count: item.count + 1 } : item)
    setcarArr(carSelected)
  }

  let filteredCars = text
    ? data.filter(item => item.marka.toLowerCase().includes(text.toLowerCase()))
    : data

  return (
    <>
      <Header text={text} setText={setText} carArr={carArr} addToCart={addToCart} legvEt={legvEt} azalt={azalt} coxalt={coxalt}/>
      <Main data={data} filteredCars={filteredCars} sil={sil} addToCart={addToCart} />
    </>
  )
}

export default App
