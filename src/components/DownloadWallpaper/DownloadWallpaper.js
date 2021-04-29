import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import DownloadImg from '../../images/downloadWallpaperImage.png';
import './DownloadWallpaper.css';
import Fade from 'react-reveal/Fade';

const DownloadWallpaper = (props) => {
    const download = props.download;
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
        <section className="download_wallpaper_area" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 download_wallpaper_details text-white my-5">
                        <div className="row">
                            <Fade cascade>
                                <div className="col-md-9">
                                    <h5>{download.title}</h5>
                                    <button className="btn text-white px-4 py-2 mt-3 hvr-float-shadow">{download.button}</button>
                                </div>
                            </Fade>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <div className="col-md-5 download_wallpaper_img d-md-block d-none">
                        <Fade cascade>
                           <img className="img-responsive w-100" src={DownloadImg} alt={DownloadImg}/>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadWallpaper;