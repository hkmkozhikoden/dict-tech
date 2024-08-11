import React from 'react'
import Vision from '../assets/images/about/vision.jpg'
import Mission from '../assets/images/about/mission.jpg'
import '../assets/style/mission-vision.css'
function MissionVision() {
  return (
    <div>
      <section className='who-are-sec'>
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-offset="10">
                  <div className="cont">
                    <h2 className='text-center text-uppercase fw-800 mb-3'>Who we are</h2>
                    <h5 className='fw-400 fs-18 l-h-30 mt-3'>
                    Dicto Technologies is dedicated to advancing software development through innovative solutions that seamlessly integrate into any business environment. We also specialize in developing cutting-edge innovations that empower entrepreneurs and business leaders to enhance productivity and drive sustainable growth. Our commitment to integrity and trust ensures that we build strong, lasting relationships with our clients, delivering solutions that make a tangible impact.</h5>
                  </div>
                </div>
            </div>
        </div>
      </section>
      <section className='mission-vision-sec'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 pe-md-0 mb-3 mb-md-0" data-aos="fade-right" data-aos-offset="10">
                    <img className='img-fluid' src={Mission} alt="mission" />
                </div>
                <div className="col-md-6 mb-3 mb-md-0" data-aos="fade-left" data-aos-offset="10">
                   <div className="cont">
                    <h4>Mission</h4>
                    <p className='fs-15'>Our mission is To empower businesses through innovative technology solutions,
                       exceptional customer service, and a passion for driving growth and efficiency
                    </p>
                   </div>
                </div>
                <div className="col-md-6 mb-3 mb-md-0" data-aos="fade-right" data-aos-offset="10">
                   <div className="cont">
                    <h4>vission</h4>
                    <p className='fs-15'>Our vision is To be a leading technology partner for businesses, delivering cutting-edge
                       solutions that transform operations, enhance customer experiences, and fostersustainable growth
                    </p>
                   </div>
                </div>
                <div className="col-md-6 ps-md-0 mb-3 mb-md-0" data-aos="fade-left" data-aos-offset="10">
                    <img className='img-fluid' src={Vision} alt="mission" />
                </div>
                {/* <div className="col-md-6 pe-md-0 mb-3 mb-md-0">
                    <img className='img-fluid' src={Mission} alt="mission" />
                </div>
                <div className="col-md-6 mb-3 mb-md-0">
                   <div className="cont">
                    <h4>Value</h4>
                    <p>We believe in innovation, integrity, and impact, striving to deliver solutions
                       that empower businesses to thrive and grow
                    </p>
                   </div>
                </div> */}
            </div>
        </div>
      </section>
    </div>
  )
}

export default MissionVision
