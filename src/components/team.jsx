import React from 'react';
import CEO from '../assets/images/team/1.jpg';
import CMO from '../assets/images/team/2.jpg';
import CTO from '../assets/images/team/3.jpg';
import CDO from '../assets/images/team/4.jpg';
import CFO from '../assets/images/team/5.jpg';

import Instagragm from "../assets/images/icons/insta.png";
import Linkedin from "../assets/images/icons/in.png";
import Twitter from "../assets/images/icons/twitter.png";
import Facebook from '../assets/images/icons/fb.png';

import '../assets/style/mission-vision.css';

const teamMembers = [
  {
    name: 'Mustafa',
    position: 'CEO & Founder',
    img: CEO,
    socialLinks: {
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      instagram: 'https://instagram.com/username',
      facebook: 'https://facebook.com/username',
    }
  },
  {
    name: 'ABD',
    position: 'CDO & Co-Founder',
    img: CDO,
    socialLinks: {
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      instagram: 'https://instagram.com/username',
      facebook: 'https://facebook.com/username',
    }
  },
  {
    name: 'Savad',
    position: 'CTO & Co-Founder',
    img: CTO,
    socialLinks: {
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      instagram: 'https://instagram.com/username',
      facebook: 'https://facebook.com/username',
    }
  },
  {
    name: 'Rahoof',
    position: 'CMO',
    img: CMO,
    socialLinks: {
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      instagram: 'https://instagram.com/username',
      facebook: 'https://facebook.com/username',
    }
  },
  {
    name: 'Muhammed Safvan',
    position: 'CFO',
    img: CFO,
    socialLinks: {
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      instagram: 'https://instagram.com/username',
      facebook: 'https://facebook.com/username',
    }
  }
];

function Team() {
  return (
    <div>
      <section className='team-sec'>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 text-center" data-aos="fade-up" data-aos-offset="10">
              <h2 className='text-uppercase'>Meet Our Team</h2>
            </div>
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
                <div className="team-card">
                  <div className="position-relative">
                    <img src={member.img} alt={member.name} />
                    <div className="social-icons d-flex align-items-center justify-content-around">
                      {member.socialLinks.twitter &&
                       <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <img className='icons' src={Twitter} alt="Twitter" /></a>}
                      {member.socialLinks.linkedin && <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <img className='icons' src={Linkedin} alt="Linkedin" /></a>}
                      {member.socialLinks.instagram && <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <img className='icons' src={Instagragm} alt="Instagram" /></a>}
                      {member.socialLinks.facebook && <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <img className='icons' src={Facebook} alt="Facebook" /></a>}
                    </div>
                  </div>
                  <div className="cont">
                    <h4 className='fw-500'>{member.name}</h4>
                    <h6>{member.position}</h6>
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

export default Team;
