import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ServiceBanner from '../components/service-banner'
import Services from '../components/services'

function Service() {
  return (
    <div>
      <Navbar/>
      <ServiceBanner/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Service
