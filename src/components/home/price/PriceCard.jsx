import React from "react";
import Heading from "../../common/Heading";
import price1Image from "../../image/batman.jpeg";
import "./price.css";

const PriceCard = () => {
  const priceData = [
    {
      plan: "Basic",
      ptext: "per user, per month",
      image: price1Image,
    },
    {
      plan: "Standard",
      ptext: "per user, per month",
      image: price1Image,
    },
    {
      plan: "Platinum",
      ptext: "2 user, per month",
      image: price1Image,
    },
    
  ];

  return (
    <>
      <section className="price background">
        <div className="container">
          <Heading title={<span className="title">Our Pricing</span>} subtitle="Flexible and Affordable Plans" />

          <div className="content flex mtop">
            {priceData.map((item, index) => (
              <div className="box shadow" key={index}>
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
