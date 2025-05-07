import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'

function App() {

  let [text, setText] = useState("")

  return (
    <>
      <Header text={text} setText={setText}/>
      <Main text={text} />
    </>
  )
}

export default App
