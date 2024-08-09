import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/images/banner/2.jpg";
import Banner2 from "../assets/images/banner/1.jpg";
import Banner3 from "../assets/images/banner/3.jpg";
import Banner4 from '../assets/images/banner/4.jpg';
import Banner5 from '../assets/images/banner/5.jpg';
import Clients from '../assets/images/icons/client.png'
import Faster from '../assets/images/icons/faster.png'
import Devlivery from '../assets/images/icons/on-time.png'


import "../assets/style/banner.css";

function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current)
  };
  const marqueeContent = [
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "#" },
    { text: "I can be another link", link: "#" },
    { text: "Or just some text", link: "#" }
  ];

  return (
    <div className="">
      <section className="banner pt-0 pb-0">
        <div className="overflow-hidden ">
          <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide">
                  <div className={`banner-content ${currentSlide === index ? 'active' : ''}`}>
                    <h1 className="text-xl-semibold">{d.name}</h1>
                    <h1 className="text-xl-semibold">{d.name1}</h1>
                  </div>
                  <img src={d.img} alt={d.name} className="banner-img" />
                </div>  
              ))}
            </Slider>
          </div>
          <div className="banner-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Clients} alt="Total Clients" />
                        <h2>3 +</h2>
                        <h6 className="font-normal">successful client</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Faster} alt="Total Clients" />
                        <h2>2 X</h2>
                        <h6 className="font-normal">Faster Deployment</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Devlivery} alt="Total Clients" />
                        <h2>5/5</h2>
                        <h6 className="font-normal">On-time Delivery</h6>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                      <div className="sm-card text-center">
                        <img className="icons" src={Faster} alt="Total Clients" />
                        <h2>3 +</h2>
                        <h6 className="font-normal">successfull client</h6>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
}


const data = [
  {
    name: "Crafting Software That Fits Your Needs",
    name1: "",
    img: Banner1,
  },
  {
    name: "Where Your Ideas Become Digital Reality",
    name1: "",
    img: Banner2,
  },
  {
    name: "Thoughtful Development for Every Project",
    img: Banner3,
  },
  {
    name: "Simple Solutions, Powerful Results",
    img: Banner4,
  },
  {
    name: "Building Your Vision, One Line at a Time",
    img: Banner5,
  },
];

export default HomeBanner;
