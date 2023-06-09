import React from "react";
import { useHistory } from "react-router-dom";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../image/abimg2.png";
import abimg1 from "../image/abimg1.png";
import "./about.css";

const About = () => {
  const history = useHistory();

  const redirectToHomePage = () => {
    history.push("/");
  };

  return (
    <>
      <section className="about">
        <Back name="About Us" title="Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Story" subtitle="" />

            <p>
              VIPPRAFEST is a dynamic and innovative construction company that
              embarked on its journey in 2023. With a passion for excellence
              and a commitment to delivering exceptional construction projects,
              VIPPRAFEST has quickly established itself as a prominent player in
              the industry. The company takes pride in its ability to blend
              cutting-edge technology, sustainable practices, and creative
              design solutions to create remarkable structures that stand the
              test of time.
            </p>
            <p>
              From residential complexes to commercial developments, VIPPRAFEST
              showcases its expertise across a diverse range of construction
              projects. The company's team of skilled professionals, including
              architects, engineers, and project managers, collaborate closely
              to ensure the highest standards of quality and precision in every
              endeavor.
            </p>
            <button className="btn2" onClick={redirectToHomePage}>
              Home
            </button>
          </div>
          <div className="right row">
            <img src={abimg1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
