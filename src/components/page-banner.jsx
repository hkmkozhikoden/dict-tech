import React from 'react'
import '../assets/style/page-banner.css'
import Bannerimg from "../assets/images/banner/3.jpg"
function PageBanner() {
  return (
    <div>
      <section className='page-banner'>
        <div className="banner-cover">
          <div className="banner-cont">
            <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <h3>Get In Touch</h3>
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <h6 className='mt-2'>  adipisicing elit. Excepturi, ipsa.</h6>
                  </div>
              </div>  
            </div>
          </div>
          <img src={Bannerimg} className='img-banner' alt="" />
        </div>
      </section>
    </div>
  )
}

export default PageBanner