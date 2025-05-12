import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Screens/Home'



function App() {
  

  return <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  
}

export default App
