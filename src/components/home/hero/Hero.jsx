import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const history = useHistory();

  const handleExploreClick = () => {
    history.push("/about");
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="VIPPRAFEST PVT.LTD" subtitle="We Believe in your Dreams." />
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
        <div className="overlay"></div>
      </section>
    </>
  );
};

export default Hero;
