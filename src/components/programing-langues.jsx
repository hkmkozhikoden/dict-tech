import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wordpress from '../assets/images/about/wordpress.png';
import Django from '../assets/images/about/django.png';
import Python from '../assets/images/about/python.png';
import Reactlogo from '../assets/images/about/react.png';
import Reactnative from '../assets/images/about/react-native.png';
import Nodejs from '../assets/images/about/nodejs.png';
import Flutter from '../assets/images/about/flutter.png';
import Html from '../assets/images/about/html.png'

import '../assets/style/mission-vision.css';

function ProgramingLangues() {
    const languages = [
        { name: 'Wordpress', image: Wordpress },
        { name: 'React Native', image: Reactnative },
        { name: 'Django', image: Django },
        { name: 'Python', image: Python },
        { name: 'HTML 5', image: Html },
        { name: 'React', image: Reactlogo },
        { name: 'Node.js', image: Nodejs },
        { name: 'Flutter', image: Flutter },
    ];

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div>
            <section className='programing-language-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-offset="10">
                            <h3 className='mb-3 text-center text-uppercase'>Programming Languages</h3>
                            <div className="language-slider text-center">
                                <Slider {...settings}>
                                    {languages.map((language, index) => (
                                        <div key={index}>
                                            <div className="language d-flex justify-content-center">
                                                <img className='icons' src={language.image} alt={language.name} />
                                            </div>
                                            <p className='text-center mt-3 fs-14'>{language.name}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProgramingLangues;
