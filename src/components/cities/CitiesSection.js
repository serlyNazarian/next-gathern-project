import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CitiesSection = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <h3>
        More than 57,000 properties in more than 216 cities and provinces around
        Saudi Arabia
      </h3>
      <p>
        From the West to the East, from the North to the South, explore the
        beauty of Saudi Arabia with the best properties in the world
      </p>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CitiesSection;
