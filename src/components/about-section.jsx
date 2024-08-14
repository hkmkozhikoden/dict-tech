import React from 'react'
import About from "../assets/images/home/about.jpg"
function AboutSection() {
  return (
    <div>
      <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 mb-3 mb-md-0" data-aos="fade-right" data-aos-offset="10">
                    <img src={About} alt="About" className='img-fluid rounded-5' />
                </div>
                <div className="col-md-6" data-aos="fade-left" data-aos-offset="10">
                    <div className="cont ps-3 mt-3 mt-md-0">
                        <h5>WHO WE ARE</h5>
                        <h3>Problem Solvers</h3>
                        <h5 className='font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, voluptate deserunt. Adipisci accusamus a molestiae, laboriosam dicta repudiandae similique quas. Eaque obcaecati dolorem vitae, quam omnis illo, corporis eius laudantium doloribus quae quod quibusdam, similique ipsam officia rem rerum ab.</h5>
                        <h5>How We Help You Win</h5>
                        <ul className='ps-4'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur quidem porro possimus? Velit dicta quasi accusantium cupiditate, veniam quisquam aspernatur, debitis qui temporibus fugiat quibusdam </li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur quidem porro possimus? Velit dicta quasi accusantium cupiditate, veniam quisquam aspernatur, debitis qui temporibus fugiat quibusdam </li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur quidem porro possimus? Velit dicta quasi accusantium cupiditate, veniam quisquam aspernatur, debitis qui temporibus fugiat quibusdam </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
