import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/images/banner/2.jpg";
import Banner2 from "../assets/images/banner/1.jpg";
import Banner3 from "../assets/images/banner/3.jpg";
import Banner4 from '../assets/images/banner/4.jpg';
import Banner5 from '../assets/images/banner/5.jpg';
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
        </div>
      </section>
    </div>
  );
}


const data = [
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner1,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner2,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner3,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner4,
  },
  {
    name: "The Best Kindergarten ",
    name1: "School For Your Child",
    img: Banner5,
  },
];

export default HomeBanner;
