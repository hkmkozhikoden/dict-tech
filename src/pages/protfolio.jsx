import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProtfolioCard from '../components/protfolio-card'
import ProtfolioBanner from '../components/protfolio-banner'

function Protfolio() {
  return (
    <div>
        <Navbar/>
        <ProtfolioBanner/>
        <ProtfolioCard/>
        <Footer/>
    </div>
  )
}

export default Protfolio
