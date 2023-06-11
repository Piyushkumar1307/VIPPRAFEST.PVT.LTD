import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import city1Image from "../../image/city-5.png";
import city2Image from "../../image/city-4.png";
import city3Image from "../../image/city-4.png";
import "./style.css";

const Location = () => {
  const history = useHistory();

  const handleExploreClick = (blogId) => {
    // Redirect to the blog page with the specified blogId
    history.push(`/blog`);
  };

  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore our Projects"
            subtitle="Construction Excellence Delivered with Precision."
          />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                {item.id === 1 && <img src={city1Image} alt="" />}
                {item.id === 2 && <img src={city2Image} alt="" />}
                {item.id === 3 && <img src={city3Image} alt="" />}
                <div className="location-overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                  </p>
                  <button className="explore-btn" onClick={() => handleExploreClick(item.id)}>
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
