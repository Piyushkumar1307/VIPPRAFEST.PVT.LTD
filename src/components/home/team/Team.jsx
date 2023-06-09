import React from "react";
import Heading from "../../common/Heading";
import team1Image from "../../image/team-1.jpg";
import team2Image from "../../image/team-2.jpg";
import team3Image from "../../image/team-3.jpg";
import team4Image from "../../image/team-4.jpg";
import "./team.css";

const Team = () => {
  const teamMembers = [
    {
      cover: team1Image,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      testimonials: "I am extremely satisfied with the construction services provided by ABC Construction Company. From the initial consultation to the final delivery of the project, their team displayed a high level of professionalism and expertise."
    },
    {
      cover: team2Image,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      testimonials: "I am extremely satisfied with the construction services provided by ABC Construction Company. From the initial consultation to the final delivery of the project, their team displayed a high level of professionalism and expertise."
    },
    {
      cover: team3Image,
      address: "Denver, USA",
      name: "Anna K. Young",
      testimonials: "I am extremely satisfied with the construction services provided by ABC Construction Company. From the initial consultation to the final delivery of the project, their team displayed a high level of professionalism and expertise."
    },
    {
      cover: team4Image,
      address: "Denver, USA",
      name: "Anna K. Young",
      testimonials: "I am extremely satisfied with the construction services provided by ABC Construction Company. From the initial consultation to the final delivery of the project, their team displayed a high level of professionalism and expertise."
    }
    // Add more team members here
  ];

  return (
    <section className="team background">
      <div className="container">
        <Heading title={<span className="title">Our Clients</span>} subtitle="Clients and their Testimonials." />

        <div className="content mtop grid4">
          {teamMembers.map((val, index) => (
            <div className="box" key={index}>
              <div className="details">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <label>{val.address}</label>
                <h4>{val.name}</h4>
                <h5>{val.testimonials}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
