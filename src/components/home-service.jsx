import React from 'react';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import '../assets/style/home-services.css';
import { Link } from 'react-router-dom';

function HomeServices() {
  const services = [
    {
      icon: <MdOutlinePhoneIphone />,
      title: "Mobile App Development",
      description: "Building mobile apps that connect with your audience. We bring your ideas to life with easy-to-use designs and dependable performance.",
    },
    {
      icon: <LiaLaptopCodeSolid />,
      title: "Web Development",
      description: "Crafting functional, user-friendly websites that reflect your vision. We focus on simplicity, efficiency, and a seamless user experience.",
    },
    {
      icon: <RiComputerLine />,
      title: "Software Solutions",
      description: "Turning your ideas into reality with smart, easy-to-use software solutions. We make innovation simple and accessible, just for you.",
    },
    {
      icon: < GrAnnounce/>,
      title: "Digital Marketing",
      description: "Unlock your brand's potential with data-driven digital marketing. Our expert strategies connect you with your audience, driving growth and measurable results.",
    },
    {
      icon: <TbWorldSearch />,
      title: "Cloud Services",
      description: "Unlock your website's potential with tailored SEO strategies. Drive organic traffic, boost rankings, and grow your business effortlessly.",
    },
    {
      icon: <LuShoppingCart />,
      title: "E-commerce Solutions",
      description: "Transform your online store with our easy e-commerce solutions. From setup to growth, we handle the tech so you can focus on your business.",
    },
  ];

  return (
    <div>
      <section className='home-services-sec'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2>Our Services</h2>
            </div>
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10" key={index}>
                <div className="ser-card text-center">
                  {service.icon}
                  <div className="cont mt-3">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <Link className='text-l-blue' to="/service">Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeServices;
