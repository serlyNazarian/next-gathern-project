import { Button, Card, Space } from "antd";
import React from "react";
import MyCarousel from "../carousel/MyCarousel";
import styles from "./book.module.css";

const { Meta } = Card;

const myData = [
  {
    id: 1,
    image: "/images/dammam.png",
  },
  {
    id: 2,
    image: "/images/dammam.png",
  },
  {
    id: 3,
    image: "/images/dammam.png",
  },
];

const renderItem = (item) => (
  <>
    <Card
      style={{
        width: 570,
        marginBottom: 15,
      }}
      cover={<img alt="example" src={item.image} />}
      actions={[<Button onClick={() => console.log("test")}>Book Now</Button>]}
    >
      <Meta title={"test"} />
    </Card>
  </>
);

const BookNowSection = () => {
  return (
    <Space>
      <div>
        <h3>Book Your Second Home</h3>
        <div>
          <span>
            Wherever your destination is, you will find your second home in
            every city in Saudi Arabia
          </span>
        </div>
        <div>
          <span>Book by property type</span>
          {/* arrows */}
        </div>
      </div>
      <MyCarousel
        items={myData}
        centerMode={false}
        autoplay={false}
        slidesToShow={1}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={false}
        infinite={false}
        dots={false}
      />
    </Space>
  );
};

export default BookNowSection;
