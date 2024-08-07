import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homebanner'
import Services from '../components/services'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <Services/>
    </div>
  )
}

export default Home
