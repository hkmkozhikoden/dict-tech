import React, { useState } from 'react';
import '../assets/style/contact-form.css';
import Map from "../assets/images/icons/map.png";
import Phone from "../assets/images/icons/phone.png";
import Sms from "../assets/images/icons/sms.png";
import Instagram from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("access_key", "ebeea6dc-105b-4b6d-8400-aeff08f2898d");
    form.append("firstname", formData.firstname);
    form.append("lastname", formData.lastname);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });
      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          timer: 3000,
          icon: "success"
        }).then(() => {
          event.target.reset();
          setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            message: ''
          });
        });
      } else {
        Swal.fire("Error", "There was an issue sending your message. Please enter proper details.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error or server issue. Please try again later.", "error");
    }
  };

  return (
    <div>
      <section className='contact-from-sec'>
        <div className="container">
          <div className="contact-form" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="from-card">
                  <h4 className='mb-3'>Send us a Message</h4>
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstname">First Name</label>
                        <input 
                          className='form-control' 
                          type="text" 
                          name="firstname" 
                          id="firstname" 
                          placeholder='Enter Your Name' 
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        /> 
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastname">Last Name</label>
                        <input 
                          className='form-control' 
                          type="text" 
                          name="lastname" 
                          id="lastname" 
                          placeholder='Enter Your Name' 
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        /> 
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone">Phone No:</label>
                        <input 
                          className='form-control' 
                          type="text" 
                          name="phone" 
                          id="phone" 
                          placeholder='Enter your Phone no:' 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                          inputMode="numeric" 
                          pattern="\d{10,}" 
                          maxLength="10" 
                          onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email</label>
                        <input 
                          className='form-control' 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder='Enter your Email'  
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea 
                          className='form-control' 
                          name="message" 
                          id="message" 
                          placeholder='Enter your Note'  
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 mb-3">
                        {/* Placeholder for reCAPTCHA */}
                      </div>
                      <div className="col-12 mt-3 mb-3">
                        <button type='submit' className='btn'>Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-offset="10">
                <div className="contact-address text-white">
                  <h4 className='text-white'>Contact Information</h4>
                  <div className='d-flex mt-5'>
                    <img className='icons mt-1' src={Map} alt="" /> 
                    <div className='ms-3'>
                      Dicto Technologies <br />
                      Vilayil (PO) <br />
                      Malappuram (DT)
                    </div>
                  </div>
                  <div className='d-flex mt-3 mt-md-5'>
                    <img className='icons mt-1' src={Phone} alt="" /> 
                    <div className='ms-3'>
                      <a href="tel:+919846007257">+91 98460 07257</a>
                    </div>
                  </div>
                  <div className='d-flex mt-3 mt-md-5'>
                    <img className='icons mt-2' src={Sms} alt="" /> 
                    <div className="ms-3">
                      <a className='d-block' href="mailto:dictotechnologies@gmail.com">dictotechnologies@gmail.com</a>
                      <a className='d-block' href="mailto:info@dictotechnologies.com">info@dictotechnologies.com</a>
                    </div>
                  </div>
                  <div className='d-flex flex-wrap mt-3 mt-md-5' data-aos="fade-up" data-aos-offset="10">
                    <a href="https://www.instagram.com/dicto_technologies/" target='_blank' rel="noreferrer">
                      <img alt='Instagram' className='social-media-links' src={Instagram} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img alt='Facebook' className='social-media-links' src={Facebook} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img alt='Linkedin' className='social-media-links' src={Linkedin} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img alt='Twitter' className='social-media-links' src={Twitter} />
                    </a>
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

export default ContactForm;
