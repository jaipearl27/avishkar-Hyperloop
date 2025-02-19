import React from 'react'
import { Link } from 'react-router-dom';
import { teamSections } from '../../components/Team_Cards/teamSections';

const team = () => {

    const teamHeads = [
        "Team Head",
        "Business",
        "Embedded Systems",
        "Power Electronics",
        "Infrastructure",
        "Levitation",
        "Mechanical",
        "Thermal",
        "Traction",
        "Alumni",
    ];
    // console.log(teamSections)

    return (
        <div>
            <div className="space-y-5 team-banner">
                <div className="banner-content">
                    <h1>Our Team</h1>
                    <p>Meet the people at Avishkar Hyperloop</p>
                </div>
            </div>
            <div className="team_members">
                <div className="container">
                    <div className="team_member_content">
                        <p>The 50+ member team of Avishkar Hyperloop is incredibly diverse, both academically and culturally, consisting of undergrad, postgrad and doctorate students from many branches and fields, all working together to develop many interdisciplinary technologies for the realization of Hyperloop. The team is divided into eight verticals, where each vertical focuses on one of the modules of Hyperloop and collaborate together to build a working, scalable Hyperloop System.</p>
                        <div className="members_list">
                            {teamHeads.map((head, index) => (
                                <Link className="member_items" key={index}>
                                    <span>{head}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {teamSections.length > 0 && teamSections.map((item, index) => (
                <div className="team_details">
                    <div className="container">
                        <div className="designation_heading">
                            {item?.heading}
                        </div>
                        <div className="teams_cards_data">
                            {item?.members?.map((member, index) => (
                                <div className="teams_Card_listing">
                                    <img src={member?.image} alt={member.alt} className='team_card_img' />
                                    <h5>{member?.name}</h5>
                                    <p>{member?.position}</p>
                                    <div className="social_account">
                                        <a href=""><i className={member?.iconClass}></i></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            ))}

        </div >
    )
}

export default team
