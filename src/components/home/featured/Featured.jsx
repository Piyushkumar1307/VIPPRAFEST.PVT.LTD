// Featured.js
import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const history = useHistory();

  const handleCardClick = () => {
    // Redirect to the services page
    history.push("/services");
  };

  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading title="Services" subtitle="Find All Types of Services that we Provide." />
          <FeaturedCard onClick={handleCardClick} />
        </div>
      </section>
    </>
  );
};

export default Featured;