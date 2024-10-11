import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import Newcollection from '../components/Newcollection'
import Newsletter from '../components/Newsletter'
import FAQ from '../pages/FAQ'
import './FAQ.css'





const Shop = () => {

  
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>
      
      <FAQ/>
    </div>
  )
}

export default Shop
