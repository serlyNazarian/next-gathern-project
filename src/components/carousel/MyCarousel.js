import React from "react";
import { Carousel } from "antd";

const MyCarousel = (props) => {
  const {
    autoplay,
    draggable,
    className,
    renderItem,
    items,
    centerMode,
    dots,
    slidesToShow,
    arrows,
    infinite,
    vertical,
    verticalSwiping,
  } = props;

  return (
    <Carousel
      autoplay={autoplay}
      draggable={draggable}
      className={className}
      centerMode={centerMode}
      dots={dots}
      slidesToShow={slidesToShow}
      arrows={arrows}
      infinite={infinite}
      vertical={vertical}
      verticalSwiping={verticalSwiping}
    >
      {items?.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </Carousel>
  );
};

MyCarousel.defaultProps = {
  autoplay: false,
  draggable: false,
  centerMode: false,
  dots: true,
  slidesToShow: 1,
  arrows: true,
  infinite: true,
  vertical: false,
  verticalSwiping: false,
};

export default MyCarousel;
