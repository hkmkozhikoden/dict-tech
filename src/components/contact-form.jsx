import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../assets/style/contact-form.css'
import Map from "../assets/images/icons/map.png";
import Phone from "../assets/images/icons/phone.png"
import Sms from "../assets/images/icons/sms.png"
import Instagragm from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';
import Swal from 'sweetalert2'

function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check if CAPTCHA is completed
    if (!captchaToken) {
        Swal.fire("Error", "Please complete the CAPTCHA", "error");
        return;
    }

    // Collect the form data
    const formData = new FormData(event.target);
    formData.append("access_key", "ebeea6dc-105b-4b6d-8400-aeff08f2898d");
    formData.append("g-recaptcha-response", captchaToken);

    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const sendRequest = async () => {
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });
            return res.json();
        } catch (error) {
            console.error("Error sending request:", error);
            return { success: false, message: "Network error. Please try again later." };
        }
    };

    const res = await sendRequest();

    // Handle the response from the API
    if (res.success) {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully",
            timer: 3000,
            icon: "success",
        }).then(() => {
            event.target.reset();
            setCaptchaToken(""); // Reset CAPTCHA token after success
        });
    } else {
        Swal.fire("Error", `There was an issue: ${res.message || "Please try again"}`, "error");
    }
};

const handleCaptcha = (value) => {
  setCaptchaToken(value); 
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
                      <label htmlFor="name">Name</label>
                      <input className='form-control' type="text" name="name" id="name" placeholder='Enter Your name' required />
                      </div>
                    {/* <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone No:</label>
                      <input className='form-control' type="text" name="phone" id="phone" placeholder='Enter your Phone no:' required inputMode="numeric" pattern="\d{10,}" maxLength="10" onInput={(e) => {e.target.value = e.target.value.replace(/\D/g, '');}}/>
                    </div> */}
                    <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email</label>
                    <input className='form-control' type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>
                    <div className="col-md-12 mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea className='form-control' name="message" id="message" placeholder='Enter your message'></textarea>
                    </div>
                    <div className="col-12 mb-3">
                    <ReCAPTCHA sitekey="6Lf5yXoqAAAAAHzq9DekQR6f2AztTi3Nn8bQqabi"onChange={handleCaptcha}/>
                    </div>
                    <div className="col-12  mt-3 mb-3">
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
                    <a href="https://www.instagram.com/dicto_technologies/" target='_blank'>
                    <img alt='insta' className='social-media-links' src={Instagragm}></img>
                    </a>
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
