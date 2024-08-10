import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBanner from '../components/page-banner'
import ContactForm from '../components/contact-form'
import Map from '../components/map'
function Contact() {
  return (
    <div>
      <Navbar/>
      <PageBanner/>
      <ContactForm/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Contact
