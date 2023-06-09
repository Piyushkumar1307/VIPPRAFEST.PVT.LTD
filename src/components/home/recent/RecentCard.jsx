import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { list } from "../../data/Data";
import "./recent.css";

const RecentCard = () => {
  const history = useHistory();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleWatchClick = (youtubeLink) => {
    // Redirect to the YouTube link
    window.location.href = youtubeLink;
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, name } = val;
          const isHovered = hoveredIndex === index;
          return (
            <div
              className="box shadow"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="img">
                <img src={cover} alt="" />
                {isHovered && (
                  <button
                    className="watch-button"
                    onClick={() => handleWatchClick(val.youtubeLink)}
                  >
                    Watch
                  </button>
                )}
              </div>
              <div className="text">
                <div className="category flex"></div>
                <h4>{name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;