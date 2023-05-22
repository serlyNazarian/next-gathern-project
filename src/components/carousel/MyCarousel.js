import React from "react";
import { Carousel } from "antd";

const MyCarousel = (props) => {
  const { autoplay, draggable, className, renderItem, items } = props;

  return (
    <Carousel autoplay={autoplay} draggable={draggable} className={className}>
      {items?.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </Carousel>
  );
};

MyCarousel.defaultProps = {
  autoplay: false,
  draggable: false,
};

export default MyCarousel;
