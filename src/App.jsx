import { useState } from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Feature from './Component/Feature'
import Collection from './Component/Collection'
import Footer from './Component/Footer'
import Instagram from './Component/Instagram'
import Product from './Component/Product'
import Action from './Component/Action'
import Banner from './Component/Banner'
import Blogo from './Component/Blogo'
import Exclusive from './Component/Exclusive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
      <Collection/>
      <Banner/>
      <Exclusive/>
      <Action/>
      <Product/>
      <Instagram/>
      <Blogo/>
      <Footer/>
    </div>
  )
}

export default App
