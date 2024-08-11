import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MissionVision from '../components/mission-vision'
import ProgramingLangues from '../components/programing-langues'
import Team from '../components/team'
import AboutBanner from '../components/about-banner'
function About() {
  return (
    <div>
      <Navbar/>
      <AboutBanner/>
      <MissionVision/>
      <ProgramingLangues/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default About
