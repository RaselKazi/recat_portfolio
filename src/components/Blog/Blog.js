import React from 'react';
import BlogMainArea from '../BlogMainArea/BlogMainArea';
import HeroBlog from '../HeroBlog/HeroBlog';
import Navbar from '../Navbar/Navbar';
import FooterArea from '../FooterArea/FooterArea';
import './Blog.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <HeroBlog />
            <BlogMainArea />
            <FooterArea />
            <ScrollToTop />
        </div>
    );
};

export default Blog;