import { Button, Card, Space } from "antd";
import React from "react";
import styles from "./offers.module.css";
import MyCarousel from "../carousel/MyCarousel";
import MyTitle from "../typography/MyTitle";
import Image from "next/image";

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
        width: 270,
        marginBottom: 15,
      }}
      cover={<Image width={50} height={50} alt="example" src={item.image} />}
    >
      {/* <Meta title={"test"} /> */}
    </Card>
  </>
);

const OffersSection = () => {
  return (
    <div className={styles.offerSectionWrapper}>
      <MyCarousel
        items={myData}
        centerMode={false}
        autoplay={false}
        slidesToShow={2}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={false}
        infinite={false}
        dots={false}
        vertical={true}
        verticalSwiping={true}
      />
      <MyCarousel
        items={myData}
        centerMode={false}
        autoplay={false}
        slidesToShow={2}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={false}
        infinite={false}
        dots={false}
        vertical={true}
        verticalSwiping={true}
      />
      <div className={styles.middleWrapper}>
        <MyTitle className={styles.titleDiv} level={2}>
          Last Minute
        </MyTitle>
        <span>offers on holiday homes</span>
        <p>
          From a warm Friday with family, to the sweet company of friends, you
          can enjoy discounts of up to 50% and continuous offers on chalets,
          camps, farms, villas and apartments.
        </p>
        <Button>Discover Offers</Button>
      </div>
      <MyCarousel
        items={myData}
        centerMode={false}
        autoplay={false}
        slidesToShow={2}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={false}
        infinite={false}
        dots={false}
        vertical={true}
        verticalSwiping={true}
      />
      <MyCarousel
        items={myData}
        centerMode={false}
        autoplay={false}
        slidesToShow={2}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={false}
        infinite={false}
        dots={false}
        vertical={true}
        verticalSwiping={true}
      />
    </div>
  );
};

export default OffersSection;
