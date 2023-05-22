import React from "react";
import MyCarousel from "../carousel/MyCarousel";

const CitiesSection = () => {
  const myData = [
    {
      image: "",
      name: "",
      amount: 1510 + "properties",
    },
    {
      image: "",
      name: "",
      amount: 1510 + "properties",
    },
  ];

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
      <MyCarousel />
    </div>
  );
};

export default CitiesSection;
