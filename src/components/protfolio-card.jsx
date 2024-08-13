import React from 'react';
import '../assets/style/protfolio.css'
import JSDA from '../assets/images/protfolio/1.jpeg';
import Sda from '../assets/images/banner/protfolio.jpg'
import { IoEyeSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
function ProtfolioCard() {
  const blogData = [
      {
          image: JSDA,
          subTitle: 'Website',
          title: 'School Website',
          url: 'https://jdtislamsda.org/',
          url1: 'https://jdtislamsda.org/',
          content: 'The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable, paving the way for a smarter future.',
      },
      {
        image: Sda,
        subTitle: 'Website',
        title: 'Travels  Website',
        url: 'Feb ',
        url1: '',
        content: 'The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable, paving the way for a smarter future.',
      },
      {
        image: JSDA,
        subTitle: 'Website',
        title: 'Restaurant Website',
        url: 'Feb ',
        url1: '',
        content: 'The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable, paving the way for a smarter future.',
      },
  ];

  return (
    <div>
      <section className='protfolio-sec'>
        <div className="container">
        <div className="row">
          {blogData.map((protfolio, index) => (
            <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
              <div className="protfolio-card">
                  <div className="position-relative">
                      <img className='protfolio-img mb-3' src={protfolio.image} alt="JDT Islam" />
                      <a href={protfolio.url} target='_blank' class="bt">
                      <GoArrowUpRight />
                      </a>
                  </div>
                  <div className="cont font-BaiJamjuree">
                     <h4 class="subtitle">{protfolio.subTitle}</h4>
                     <h4 className='mb-3'>{protfolio.title}</h4>
                     <p className='mb-3'>{protfolio.content}</p>
                  </div>
                  <div className="card-bottom">
                    <a href={protfolio.url} target="_blank" class="link">
                      <FaLink />
                       View
                    </a>
                    <a href={protfolio.url1} target="_blank" class="link">
                      <IoEyeSharp /> 
                       View
                    </a>
                  </div>
              </div>
            </div>   
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default ProtfolioCard
