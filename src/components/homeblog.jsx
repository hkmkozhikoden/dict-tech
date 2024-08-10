import React from 'react';
import Blog1 from '../assets/images/blog/innovation.jpg';
import Blog2 from '../assets/images/blog/ai.jpg'; // Assuming additional images
import Blog3 from '../assets/images/blog/web.jpg'; // Assuming additional images
import '../assets/style/home-blog.css';
import { Link } from 'react-router-dom';

function HomeBlog() {
  const blogs = [
    {
      id: 1,
      title: 'The Evolution of Smart Home Technology',
      image: Blog1,
      content: `The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable, paving the way for a smarter futureThe growth of remote learning is reshaping education by leveraging technology to offer flexible, personalized, and accessible learning experiences. As the educational landscape continues to evolve, remote learning presents opportunities to expand access and improve educational outcomes while addressing the challenges that come with this transformation.`,
    },
    {
      id: 2,
      title: 'Unlocking the Potential of AI in Modern Businesses',
      image: Blog2,
      content: `AI is more than just a buzzword—it's a powerful tool that can transform every aspect of your business. By embracing AI, businesses can automate tasks, enhance customer experiences, make data-driven decisions, improve operational efficiency, and drive innovation, ensuring they stay competitive in the digital age. Investing in AI today is not just about staying relevant but also about unlocking new avenues for growth and success in the future.`,
    },
    {
      id: 3,
      title: 'Web Development Best Practices in 2024',
      image: Blog3,
      content: `Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. 
        This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.`,
    },
  ];

  return (
    <div>
      <section className='home-blog'>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-2 mt-2">
              <h3 className='text-center'>Latest Updates</h3>
            </div>
            {blogs.map((blog) => (
              <div key={blog.id} className="col-xl-4 col-md-6 mb-3"  data-aos="fade-up" data-aos-offset="10">
                <div className="card border-0">
                    <div className="img-card position-relative overflow-hidden rounded-5">
                    <img src={blog.image} alt="Blog image" />
                    </div>
                  <div className="cont mt-3">
                    <h4>{blog.title}</h4>
                    <p className='truncate-5'>{blog.content}</p>
                    <Link className='btn' to={"/"}><li>Read More</li></Link>
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

export default HomeBlog;
