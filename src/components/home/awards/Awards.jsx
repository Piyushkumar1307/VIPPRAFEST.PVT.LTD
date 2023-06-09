import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import CountUp from "react-countup";
import "./awards.css";

const Awards = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
  }, []);

  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading title="We have a strong base of over 1,000+ satisfied users who continue to love and appreciate our services." />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>
                  {startCount && (
                    <CountUp
                      start={0}
                      end={val.num}
                      duration={2}
                      separator=","
                      prefix="+"
                    />
                  )}
                </h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
