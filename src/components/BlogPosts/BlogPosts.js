import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../../images/blog/blog1.jpg';
import Blog2 from '../../images/blog/blog2.jpg';
import Blog3 from '../../images/blog/blog3.jpg';
import Blog4 from '../../images/blog/blog4.jpg';
import Blog5 from '../../images/blog/blog5.jpg';
import Blog6 from '../../images/blog/blog6.jpg';
import Blog7 from '../../images/blog/blog7.jpg';
import './BlogPosts.css';
import Fade from 'react-reveal/Fade';

const BlogPosts = () => {
    const BlogArray = [
        {
            id: 1,
            img: Blog1,
            title: 'The Thin & Blur Line Between Corporate Lifestyle & Other Things'
        },
        {
            id: 2,
            img: Blog2,
            title: 'Halfway Though a Decade & More'
        },
        {
            id: 3,
            img: Blog3,
            title: 'How to Live a Balanced Life like Everyone'
        },
        {
            id: 4,
            img: Blog4,
            title: 'Smashing Dreams & More of It'
        },
        {
            id: 5,
            img: Blog5,
            title: 'The Life Hack You Might Think You Know'
        },
        {
            id: 6,
            img: Blog6,
            title: 'Living Well with Style and Substance'
        },
        {
            id: 7,
            img: Blog7,
            title: 'The Future of South Lies in Secret'
        },
        {
            id: 8,
            img: Blog1,
            title: '8 Easy Pieces I’ve Worn Over & Over to Have it All'
        },
        {
            id: 9,
            img: Blog2,
            title: 'There Will be a Time When It All Goes Against you'
        }
    ]
    return (
        <div className="container">   
            <Fade cascade>
            <div className="row">
                {
                   BlogArray.map(blog => {
                      if (blog.id === 1) {
                          return <div className="col-md-12 mb-4">
                              <div className="single_blogs">
                                  <div className="tb-zoom">
                                      <Link to="/">
                                          <img className="tb-zoom-in1 w-100" src={blog.img} alt=""/>
                                      </Link>
                                  </div>
                                  <div className="post_meta">
                                      <p className="mb-0"><Link className="text-decoration-none" to="/">LIFESTYLES</Link></p>
                                      <h1 className="h1-responsive"><Link className="text-decoration-none" to="/">{blog.title}</Link></h1>
                                      <ul className="list-unstyled list-inline text-secondary">
                                          <li className="list-inline-item author_name">David Beck</li>
                                          <li className="list-inline-item">April 15, 2019</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      }
                      else{
                        return <div className="col-md-6 mb-4">
                            <div className="single_blogs">
                                <div className="tb-zoom">
                                    <Link to="/">
                                        <img className="tb-zoom-in1 w-100" src={blog.img} alt=""/>
                                    </Link>
                                </div>
                                <div className="post_meta">
                                    <p className="mb-0"><Link className="text-decoration-none" to="/">LIFESTYLES</Link></p>
                                    <h1 className="h1-responsive"><Link className="text-decoration-none" to="/" style={{fontSize: '18px', lineHeight: '22px'}}>{blog.title}</Link></h1>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">David Beck</li>
                                        <li className="list-inline-item">April 15, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      }
                   })
                }
                </div>
            </Fade>
        </div>
    );
};

export default BlogPosts;