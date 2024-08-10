import React from 'react'
import '../assets/style/footer.css';
import { Link } from "react-router-dom";
import Instagragm from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';
import Logo from '../assets/images/logo/logo-b.png'

function Footer() {
  return (
    <footer className='footer pb-0 pt-0'>
      <div className="footer-top">
      <div className='container'>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-3 mb-lg-0">
            <div className="logo">
              <img className='logo' src={Logo} alt="logo" />
            </div>
            <p className='sec-dec fs-14 px-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet facere hic incidunt minus quibusdam explicabo quis delectus modi qui!            </p>
            <div className='social'>
              <img alt='insta' className='social-media-links' src={Instagragm}></img>
              <img alt='Facebook' className='social-media-links' src={Facebook}></img>
              <img alt='Linkedin' className='social-media-links' src={Linkedin}></img>
              <img alt='Twitter' className='social-media-links' src={Twitter}></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
          <h3 className="widget-title">Quick Links</h3>
          <ul className='footer-contact'>
          <Link to={"/"}> <li > Service</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/blogs"}><li>Blog</li></Link>
          <Link to={"/gallery"}><li>Gallery</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6">
          <h3 className="widget-title">Contact</h3>
         <ul className='contact-right'>
         <li>
            <div className="">
              <a>Dicto Technologies <br />
                Vilayil (PO) <br />
                Malappuram (DT) <br />
                Kerala, India
                673641
              </a>
            </div>
          </li>
          <li>
              <div className="">
              <a className='d-block' href="+91 98460 07257">+91 98460 07257</a>
              {/* <a className='d-block' href="tel:+91 98460 07257">+91 6282 014 275</a> */}
              </div>
          </li>
          <li>
              <div className="">
              <a className='d-block' href="mailto:jdtislamclt12@gmail.com">jdtislamclt12@gmail.com</a>
              <a className='d-block' href="mailto:info@jdtislam.org">info@jdtislam.org</a>
              </div>
          </li>
         </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>
          <div className="col-12">
            <div className='py-2 '>©2024 Dicto Technologies | All Rights Reserved |Privacy Policy</div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
