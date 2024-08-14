import React from 'react'
import '../assets/style/contact-form.css'
import Map from "../assets/images/icons/map.png";
import Phone from "../assets/images/icons/phone.png"
import Sms from "../assets/images/icons/sms.png"
import Instagragm from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';
function ContactForm() {
  return (
    <div>
      <section className='contact-from-sec'>
        <div className="container">
          <div className="contact-form" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="from-card">
                  <h4 className='mb-3'>Send us a Message</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Name">First Name</label>
                      <input className='form-control' type="text" name="First name" id="first-name" placeholder='Enter Your Name'/> 
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Name">Last Name</label>
                      <input className='form-control' type="text" name="Last name" id="last-name" placeholder='Enter Your Name'/> 
                    </div>
                    <div className="col-md-6 mb-3">
                    <label htmlFor="Phone">Phone No:</label>
                      <input className='form-control' type="text" name="number" id="phone" placeholder='Enter your Phone no:' />
                    </div>
                    <div className="col-md-6 mb-3">
                    <label htmlFor="Email">Email</label>
                      <input className='form-control' type="text" name="" id="phone" placeholder='Enter your Phone no:' />
                    </div>
                    <div className="col-md-12 mb-3">
                    <label htmlFor="name">Message</label>
                      <textarea className='form-control' type="text" name="Message" id="Message" placeholder='Enter your Note'></textarea>
                    </div>
                    <div className="col-12  mt-3 mb-3">
                        <button className='btn'>Send</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-offset="10">
                <div className="contact-address text-white">
                    <h4 className='text-white'>Contact Information</h4>
                    <div className='d-flex mt-5'>
                       <img className='icons mt-1' src={Map} alt="" /> 
                       <div className='ms-3'>Dicto Technologies <br />
                        Vilayil (PO) <br />
                        Malappuram (DT)</div>
                    </div>
                    <div className='d-flex mt-3 mt-md-5'>
                       <img className='icons mt-1' src={Phone} alt="" /> 
                       <div className='ms-3'>
                        <a href="">+91 98460 07257</a>
                        </div>
                    </div>
                    <div className='d-flex mt-3 mt-md-5'>
                       <img className='icons mt-2' src={Sms} alt="" /> 
                       <div className="ms-3">
                         <a className='d-block' href="mailto:dictotechnologies@gmail.com">dictotechnologies@gmail.com</a>
                         <a className='d-block' href="#">info@dictotechnologies.com</a>
                       </div>
                    </div>
                    <div className='d-flex flex-wrap mt-3 mt-md-5' data-aos="fade-up" data-aos-offset="10">
                    <img alt='insta' className='social-media-links' src={Instagragm}></img>
                    <img alt='Facebook' className='social-media-links' src={Facebook}></img>
                    <img alt='Linkedin' className='social-media-links' src={Linkedin}></img>
                    <img alt='Twitter' className='social-media-links' src={Twitter}></img>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
