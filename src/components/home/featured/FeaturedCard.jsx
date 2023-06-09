import React from "react";
import Heading from "../../common/Heading";
import featured1Image from "../../image/h1.png";
import featured2Image from "../../image/h2.png";
import featured3Image from "../../image/h3.png";
import featured4Image from "../../image/h4.png";
import featured5Image from "../../image/h6.png";

const FeaturedCard = ({ onClick }) => {
  const featuredData = [
    {
      cover: featured1Image,
      name: "House Construction",
      total: "122 Property",
    },
    {
      cover: featured2Image,
      name: "Road Construction",
      total: "155 Property",
    },
    {
      cover: featured3Image,
      name: "Railway Construction",
      total: "300 Property",
    },
    {
      cover: featured4Image,
      name: "School Construction",
      total: "80 Property",
    },
    {
      cover: featured5Image,
      name: "Mall Construction",
      total: "80 Property",
    },
  ];

  return (
    <div className="content grid5 mtop">
      {featuredData.map((item, index) => (
        <div className="box" key={index} onClick={onClick}>
          <img src={item.cover} alt="" />

          <h4>{item.name}</h4>
          <label>{item.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
