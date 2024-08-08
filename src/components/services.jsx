import React from 'react'
import Service1 from '../assets/images/banner/1.jpg'
import Service2 from '../assets/images/banner/2.jpg'
import Service3 from '../assets/images/banner/3.jpg'
import Service4 from '../assets/images/banner/4.jpg'
import Service5 from '../assets/images/banner/5.jpg'
import Service6 from '../assets/images/banner/3.jpg'

import '../assets/style/services.css'
function Services() {
  return (
    <div>
      <section className='services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h2>Our Services</h2>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service1} alt="service" />
                        <div className="cont mt-3">
                            <h4>Mobile App Development</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service2} alt="service" />
                        <div className="cont mt-3">
                            <h4>Web App Development</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service3} alt="service" />
                        <div className="cont mt-3">
                            <h4>Software Solutions</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service4} alt="service" />
                        <div className="cont mt-3">
                            <h4>Mobile App Development</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service5} alt="service" />
                        <div className="cont mt-3">
                            <h4>Mobile App Development</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service6} alt="service" />
                        <div className="cont mt-3">
                            <h4>Mobile App Development</h4>
                            <p>We turn your ideas into reality with our expert mobile app developers.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services
