import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/Heading";
import price1Image from "../../image/batman.jpeg";
import price2Image from "../../image/batman.jpeg";
import "./price.css";

const PriceCard = () => {
  const history = useHistory();

  const handleImageClick = () => {
    // Redirect to members page
    history.push("/pricing");
  };

  const priceData = [
    {
      plan: "Vijay Kumar Singh",
      ptext: "per user, per month",
      image: price1Image,
    },
    {
      plan: "Pawan Kumar",
      ptext: "per user, per month",
      image: price2Image,
    },
    
  ];

  return (
    <>
      <section className="price background">
        <div className="container">
          <Heading title={<span className="title"></span>} subtitle="" />

          <div className="content flex mtop">
            {priceData.map((item, index) => (
              <div className="box shadow" key={index} onClick={handleImageClick}>
                <img src={item.image} alt={item.plan} className="price-image" />
                <h3 className="plan-title">{item.plan}</h3>
                <p className="ptext">{item.ptext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCard;
