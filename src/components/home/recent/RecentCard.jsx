import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { list } from "../../data/Data";
import pr1Image from "../../image/pr1.png";
import pr2Image from "../../image/pr2.png";
import pr3Image from "../../image/pr3.png";
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
          const { name } = val;
          const isHovered = hoveredIndex === index;
          let coverImage;
          if (index === 0) {
            coverImage = pr1Image;
          } else if (index === 1) {
            coverImage = pr2Image;
          } else if (index === 2) {
            coverImage = pr3Image;
          }
          return (
            <div
              className="box shadow"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="img">
                <img src={coverImage} alt="" />
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
