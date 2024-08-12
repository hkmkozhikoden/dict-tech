import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import BlogBanner from '../components/blog-banner'
import BlogCard from '../components/blogcard'
function Blog() {
  return (
    <div>
      <Navbar/>
      <BlogBanner/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}

export default Blog
