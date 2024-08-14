import React, { useState } from 'react';
import Blog1 from '../assets/images/blog/innovation.jpg';
import Blog2 from '../assets/images/blog/ai.jpg';
import Blog3 from '../assets/images/blog/web.jpg';
import '../assets/style/blog-card.css';
import User1 from '../assets/images/icons/user.png';

function BlogCard() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogData = [
        {
            blogImage: Blog1,
            userImage: User1,
            userName: 'Rijil',
            date: 'Feb 1, 2024',
            title: 'The Evolution of Smart Home Technology',
            content: 'The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable, paving the way for a smarter future.',
        },
        {
            blogImage: Blog2,
            userImage: User1,
            userName: 'John Doe',
            date: 'Mar 10, 2024',
            title: 'Unlocking the Potential of AI in Modern Businesses',
            content: "AI is more than just a buzzword—it's a powerful tool that can transform every aspect of your business. By embracing AI, businesses can automate tasks, enhance customer experiences, make data-driven decisions, improve operational efficiency, and drive innovation, ensuring they stay competitive in the digital age. Investing in AI today is not just about staying relevant but also about unlocking new avenues for growth and success in the future.",
        },
        {
            blogImage: Blog3,
            userImage: User1,
            userName: 'John Doe',
            date: 'Mar 10, 2024',
            title: "Web Development Best Practices in 2024",
            content: "Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.",
        },
    ];

    const openModal = (blog) => {
        setSelectedBlog(blog);
    };

    const closeModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className='blog-main-card'>
            <section className='blog-card-sec'>
                <div className="container">
                    {blogData.map((blog, index) => (
                        <div key={index} onClick={() => openModal(blog)} style={{ cursor: 'pointer' }}>
                            <div className="row mb-3">
                                <div className="col-md-6 col-lg-5 mb-3 mbm-md-0" data-aos="fade-right" data-aos-offset="10">
                                    <img src={blog.blogImage} className='blog-img' alt="Blog" />
                                </div>
                                <div className="col-md-6 col-lg-7 mt-3 mt-md-0" data-aos="fade-left" data-aos-offset="10">
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={blog.userImage} className='user-img' alt="User" />
                                            <div className='ms-3'>
                                                <h6>{blog.userName}</h6>
                                                <h6>{blog.date}</h6>
                                            </div>
                                        </div>
                                        <h4>{blog.title}</h4>
                                        <p className='truncate-5'>{blog.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedBlog && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedBlog.title}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedBlog.blogImage} className='modal-blog-img mb-3' alt="Blog" style={{ width: '100%' }} />
                                <p>{selectedBlog.content}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-green" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogCard;
