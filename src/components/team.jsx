import React from 'react'
import CEO from '../assets/images/team/1.jpg'
import CMO from '../assets/images/team/2.jpg'
import CTO from '../assets/images/team/3.jpg'
import CDO from '../assets/images/team/4.jpg'
import CFO from '../assets/images/team/5.jpg'

import Instagragm from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';


import '../assets/style/mission-vision.css';
function Team() {
  return (
    <div>
      <section className='team-sec'>
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3 text-center" data-aos="fade-up" data-aos-offset="10">
                    <h2 className='text-uppercase'>Meet Our Team</h2>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="team-card">
                        <div className="position-relative">
                          <img src={CEO} alt="CEO" />
                          <div className="social-icons d-flex align-items-center justify-content-around">
                            <img className='icons' src={Twitter} alt="Twitter" />
                            <img className='icons' src={Linkedin} alt="Linkedin" />
                            <img className='icons' src={Instagragm} alt="Instagragm" />
                            <img className='icons' src={Facebook} alt="Facebook" />
                          </div>
                        </div>
                       <div className="cont">
                         <h4 className='fw-500'>Mustafa</h4>
                         <h6>CEO & Founder</h6>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="team-card">
                        <div className="position-relative">
                          <img src={CDO} alt="CEO" />
                          <div className="social-icons d-flex align-items-center justify-content-around">
                            <img className='icons' src={Twitter} alt="Twitter" />
                            <img className='icons' src={Linkedin} alt="Linkedin" />
                            <img className='icons' src={Instagragm} alt="Instagragm" />
                            <img className='icons' src={Facebook} alt="Facebook" />
                          </div>
                        </div>
                       <div className="cont">
                         <h4 className='fw-500'>ABD</h4>
                         <h6>CDO & Founder</h6>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="team-card">
                        <div className="position-relative">
                          <img src={CTO} alt="CEO" />
                          <div className="social-icons d-flex align-items-center justify-content-around">
                            <img className='icons' src={Twitter} alt="Twitter" />
                            <img className='icons' src={Linkedin} alt="Linkedin" />
                            <img className='icons' src={Instagragm} alt="Instagragm" />
                            <img className='icons' src={Facebook} alt="Facebook" />
                          </div>
                        </div>
                       <div className="cont">
                         <h4 className='fw-500'>Savad</h4>
                         <h6>CTO & Co-Founder</h6>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="team-card">
                        <div className="position-relative">
                          <img src={CMO} alt="CEO" />
                          <div className="social-icons d-flex align-items-center justify-content-around">
                            <img className='icons' src={Twitter} alt="Twitter" />
                            <img className='icons' src={Linkedin} alt="Linkedin" />
                            <img className='icons' src={Instagragm} alt="Instagragm" />
                            <img className='icons' src={Facebook} alt="Facebook" />
                          </div>
                        </div>
                       <div className="cont">
                         <h4 className='fw-500'>Rahoof</h4>
                         <h6>CMO</h6>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="team-card">
                        <div className="position-relative">
                          <img src={CFO} alt="CEO" />
                          <div className="social-icons d-flex align-items-center justify-content-around">
                            <img className='icons' src={Twitter} alt="Twitter" />
                            <img className='icons' src={Linkedin} alt="Linkedin" />
                            <img className='icons' src={Instagragm} alt="Instagragm" />
                            <img className='icons' src={Facebook} alt="Facebook" />
                          </div>
                        </div>
                       <div className="cont">
                         <h4 className='fw-500'>Muhammed Safvan</h4>
                         <h6>CFO</h6>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Team
