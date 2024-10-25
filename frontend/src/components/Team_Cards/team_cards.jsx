import React from 'react'
const teamData = {
    heading: "Team Heads",
    members: [
        {
            name: "Shri Ashwini Vaishnaw",
            designation:
                "Hon'ble Union Minister for Railways, Communications, Electronics and Information Technology of India",
            image: "/public/images/teams/Shri_Ashwini_Vaishnaw.webp",
            social: {
                linkedin: "https://www.linkedin.com/in/ashwinivaishnaw"
            }
        },
        // Add more members here
    ]
};
const TeamCards = ({ team }) => {
    return (
        <div>
            <div className="team_details">
                <div className="designation_heading">{team.heading}</div>
                {team.members.map((member, index) => (
                    <div className="teams_Card_listing" key={index}>
                        <img src={member.image} alt={member.name} className="w-100" />
                        <h5>{member.name}</h5>
                        <p>{member.designation}</p>
                        <div className="social_account">
                            {member.social.linkedin && (
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default team_cards
