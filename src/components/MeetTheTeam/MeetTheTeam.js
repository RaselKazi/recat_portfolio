import React from 'react';
import Team from '../Team/Team';
import './MeetTheTeam.css';

const MeetTheTeam = () => {
    return (
        <section className="MeetTheTeam_area bg-white">
            <div className="container py-5">
                <div className="row MeetTheTeam_details text-center pt-5 mb-2">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                         <h2 className="h2-responsive">Meet the team</h2>
                         <p className="p-responsive">Fitst see how your businesses are performing now. <br/>
Then do more with insights from Webify team.</p>
                    </div>
                    <div className="col-md-3 col-sm-12"></div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-12">
                       <Team />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTheTeam;