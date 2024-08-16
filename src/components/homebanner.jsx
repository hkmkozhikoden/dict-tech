import React   from "react";
import Banner1 from "../assets/images/banner/home4.jpg";
import Clients from '../assets/images/icons/client.png'
import Faster from '../assets/images/icons/faster.png'
import Devlivery from '../assets/images/icons/on-time.png'


import "../assets/style/banner.css";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="">
      <section className="banner pt-0 pb-0">
      <div className="banner-cover">
            <div className="banner-slide">
              <div className="banner-content">
                <div className="container">
                 <div className="row">
                  <div className="col-md-8 col-lg-6"  data-aos="fade-up" data-aos-offset="10">
                  <h1 className="text-xl-semibold">Excellence Through <br /> Innovation</h1>
                  <Link to='/contact' className="btn-banner text-black">Book a meeting</Link>
                  </div>
                 </div>
                </div>
              </div>
              <img src={Banner1} alt="Banner image" className="banner-img" />
            </div>  
          </div>
          <div className="banner-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Clients} alt="Total Clients" />
                        <h4 className="mt-3">3 +</h4>
                        <h6 className="font-normal">successful client</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Faster} alt="Total Clients" />
                        <h4 className="mt-3">2 X</h4>
                        <h6 className="font-normal">Faster Deployment</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Devlivery} alt="Total Clients" />
                        <h4 className="mt-3">5/5</h4>
                        <h6 className="font-normal">On-time Delivery</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Faster} alt="Total Clients" />
                        <h4 className="mt-3">3 +</h4>
                        <h6 className="font-normal">successfull client</h6>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
      </section>
    </div>
  );
}
export default HomeBanner;
