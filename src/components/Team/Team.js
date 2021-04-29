import React from 'react';
import Member1 from '../../images/home/member1.jpg';
import Member2 from '../../images/home/member2.jpg';
import Member3 from '../../images/home/member4.jpg';
import Member4 from '../../images/home/member3.jpg';
import './Team.css';
import { Link } from 'react-router-dom';

const Team = () => {
    const TeamArray = [
        {
            img: Member1,
            name: 'Marissa Mayer',
            position: 'Founder'
        },
        {
            img: Member2,
            name: 'Travis Kalanick',
            position: 'Founder'
        },
        {
            img: Member3,
            name: 'Phebe Novakovic',
            position: 'Founder'
        },
        {
            img: Member4,
            name: 'Hiroshi Mikitani',
            position: 'Founder'
        }
    ]
    return (
        <div className="row">
            {
                TeamArray.map(team => (
                    <div className="col-md-3 text-center mb-3 col-sm-6 col-xs-12">
                        <div className="single_team border hvr-float-shadow">
                             <div className="team_member_img">
                                 <img className="w-100" src={team.img} alt=""/>
                             </div>
                             <div className="team_member_details">
                                 <h6 className="h6-responsive mb-0">{team.name}</h6>
                                 <p className="p-responsive mb-2">{team.position}</p>
                             </div>
                             <hr className="my-0" />
                             <div className="team_social">
                                 <ul className="list-unstyled list-inline mb-0 pb-1">
                                     <li className="list-inline-item"><Link className="text-decoration-none" to="/">LinkedIn |</Link></li>
                                     <li className="list-inline-item"><Link className="text-decoration-none" to="/">Facebook |</Link></li>
                                     <li className="list-inline-item"><Link className="text-decoration-none" to="/">Google</Link></li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Team;