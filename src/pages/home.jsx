import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homebanner'
import Services from '../components/services'
import AboutSection from '../components/about-section'
import Testimonial from '../components/testimonials'
import Footer from '../components/footer'
import HomeBlog from '../components/homeblog'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <AboutSection/>
        <Services/>
        <Testimonial/>
        <HomeBlog/>
        <Footer/>
    </div>
  )
}

export default Home
