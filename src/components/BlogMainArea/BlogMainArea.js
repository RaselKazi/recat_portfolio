import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import BlogPosts from '../BlogPosts/BlogPosts';
import Sidebar from '../Sidebar/Sidebar';

const BlogMainArea = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    return (
        <section className="blog_main_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-8">
                        <BlogPosts />
                    </div>
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogMainArea;