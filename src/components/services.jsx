import React from 'react'
import Service1 from '../assets/images/service/web1.jpg'
import Service2 from '../assets/images/service/app.jpg'
import Service3 from '../assets/images/service/software.jpg'
import Service4 from '../assets/images/service/seo.jpg'
import Service5 from '../assets/images/service/ecommerce.jpg'
import Service6 from '../assets/images/service/marketing.jpg'

import '../assets/style/services.css'
function Services() {
  return (
    <div>
      <section className='services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service1} alt="service" />
                        <div className="cont mt-3">
                            <h4>Mobile App Development</h4>
                            <p> Building mobile apps that connect with your audience. We bring your ideas to life with easy-to-use designs and dependable performance.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service2} alt="service" />
                        <div className="cont mt-3">
                            <h4>Web Development</h4>
                            <p>Crafting functional, user-friendly websites that reflect your vision.
                                We focus on simplicity, efficiency, and a seamless user experience.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service3} alt="service" />
                        <div className="cont mt-3">
                            <h4>Software Solutions</h4>
                            <p>Turning your ideas into reality with smart, easy-to-use software solutions. We make innovation simple and accessible, just for you.</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service6} alt="service" />
                        <div className="cont mt-3">
                            <h4>Digital Marketing</h4>
                            <p>Unlock your brand's potential with data-driven digital marketing. Our expert strategies connect you with your audience,
                                 driving growth and measurable results</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service4} alt="service" />
                        <div className="cont mt-3">
                            <h4>Cloud Services</h4>
                            <p>Unlock your website's potential with tailored SEO strategies. Drive organic traffic, boost rankings, and grow your business effortlessly</p>
                            <a className='text-l-blue' href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="ser-card">
                        <img className='img-fluid' src={Service5} alt="service" />
                        <div className="cont mt-3">
                            <h4>E-commerce Solutions</h4>
                            <p>Transform your online store with our easy e-commerce solutions. 
                                From setup to growth, we handle the tech so you can focus on your business</p>
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
