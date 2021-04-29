import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import News1 from '../../images/home/news1.jpg';
import News2 from '../../images/home/news2.jpg';
import News3 from '../../images/home/news3.jpg';
import News4 from '../../images/home/news4.jpg';
import News5 from '../../images/home/news5.jpg';
import News6 from '../../images/home/news6.jpg';
import './HomeBusinessNews.css';

const HomeBusinessNews = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    const NewsArray = [
        {
            img: News1,
            tag: 'LIFESTYLE',
            title: 'The Thin & Blur Line Between Corporate Lifestyle & Other Things'
        },
        {
            img: News2,
            tag: 'LIFESTYLE',
            title: 'Halfway Though a Decade & More'
        },
        {
            img: News3,
            tag: 'LIFESTYLE',
            title: 'How to Live a Balanced Life like Everyone'
        },
        {
            img: News4,
            tag: 'LIFESTYLE',
            title: 'Smashing Dreams & More of It'
        },
        {
            img: News5,
            tag: 'LIFESTYLE',
            title: 'The Life Hack You Might Think You Know'
        },
        {
            img: News6,
            tag: 'LIFESTYLE',
            title: 'Living Well with Style and Substance'
        }
    ]
    return (
        <section className="business_news_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
            <hr className="my-0"/>
            <div className="container py-5">
                <div className="row business_news_details pt-5 text-center mb-3">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <h2 className="h2-responsive">Business News</h2>
                        <p className="p-responsive">Business-to-consumer lean startup incubator iPad growth hacking <br/>
influencer research & development user experience.</p>
                    </div>
                    <div className="col-md-3 col-sm-12"></div>
                </div>
                <div className="row pb-5">
                    {
                        NewsArray.map(news => (
                            <div className="col-md-4 mb-3">
                                <div className="single_news d-flex">
                                    <div className="single_news_img me-3">
                                       <img className="w-100 rounded" src={news.img} alt={news.img} />
                                    </div>
                                    <div className="single_news_details">
                                        <h6 className="h6-responsive mb-1">{news.tag}</h6>
                                        <h4 className="h4-responsive">{news.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeBusinessNews;