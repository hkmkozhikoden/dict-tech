import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homebanner'
import AboutSection from '../components/about-section'
import Testimonial from '../components/testimonials'
import Footer from '../components/footer'
import HomeBlog from '../components/homeblog'
import HomeServices from '../components/home-service'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <AboutSection/>
        <HomeServices/>
        <Testimonial/>
        <HomeBlog/>
        <Footer/>
    </div>
  )
}

export default Home
