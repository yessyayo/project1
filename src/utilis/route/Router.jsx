import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../Component/page/Home'
import Cartpage from '../../Component/Cartpage'
export default function Router() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/cartpage" element = {<Cartpage/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}
