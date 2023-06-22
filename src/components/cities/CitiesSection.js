import React from "react";
import MyCarousel from "../carousel/MyCarousel";
import { Card, List } from "antd";
import styles from "./cities.module.css";
import Link from "next/link";
import MyTitle from "../typography/MyTitle";
import Image from "next/image";

const { Meta } = Card;

const data = [
  {
    title: "منتجعات و شاليهات الرياض",
  },
  {
    title: "مزارع الرياض",
  },
  {
    title: "فلل وشقق الرياض",
  },
  {
    title: "مخيمات الرياض",
  },
  {
    title: "شاليهات و استراحات جدة",
  },
  {
    title: "مزارع جدة",
  },
  {
    title: "فلل وشقق جدة",
  },
  {
    title: "منتجعات الخبر و الدمام",
  },
  {
    title: "مزارع الدمام",
  },
  {
    title: "فلل وشقق الخبر و الدمام",
  },
  {
    title: "مخيمات الدمام",
  },
  {
    title: "منتجعات وشاليهات ابها",
  },
  {
    title: "مزارع ابها",
  },
  {
    title: "فلل وشقق ابها",
  },
  {
    title: "مخيمات ابها",
  },
  {
    title: "منتجعات وشاليهات الطائف",
  },
  {
    title: "مزارع الطائف",
  },
  {
    title: "فلل وشقق ابها",
  },
  {
    title: "فلل وشقق ابها",
  },
  {
    title: "فلل وشقق ابها",
  },
];

const myData = [
  {
    id: 1,
    image: "/images/dammam.png",
    name: "Dammam and Saihat",
    amount: 1510 + "properties",
  },
  {
    id: 2,
    image: "/images/abha.png",
    name: "Abha",
    amount: 3125 + "properties",
  },
  {
    id: 3,
    image: "/images/taif.png",
    name: "Taif",
    amount: 2516 + "properties",
  },
  {
    id: 4,
    image: "/images/baha.png",
    name: "Baha",
    amount: 667 + "properties",
  },
  {
    id: 5,
    image: "/images/ula.png",
    name: "Ula",
    amount: 1923 + "properties",
  },
  {
    id: 6,
    image: "/images/khamis.png",
    name: "Khamis",
    amount: 1149 + "properties",
  },
  {
    id: 7,
    image: "/images/buraydah.png",
    name: "Buraydah",
    amount: 1069 + "properties",
  },
  {
    id: 8,
    image: "/images/tabuk.png",
    name: "Tabuk",
    amount: 816 + "properties",
  },
  {
    id: 9,
    image: "/images/jeddah.png",
    name: "Jeddah",
    amount: 6483 + "properties",
  },
  {
    id: 10,
    image: "/images/riyadh.png",
    name: "Riyadh",
    amount: 20789 + "properties",
  },
];

const renderItem = (item) => (
  <>
    <Card
      style={{
        width: 270,
      }}
      cover={<Image width={100} height={100} alt="example" src={item.image} />}
    >
      <Meta title={item.name} description={item.amount} />
    </Card>
  </>
);

const CitiesSection = () => {
  return (
    <div className={styles.citiesWrapper}>
      <div className={styles.textDiv}>
        <MyTitle level={3} className={styles.HeaderText}>
          More than 61,000 properties in more than 216 cities and provinces
          around Saudi Arabia
        </MyTitle>
        <p className={styles.paragraphDiv}>
          From the West to the East, from the North to the South, explore the
          beauty of Saudi Arabia with the best properties in the world
        </p>
      </div>
      <MyCarousel
        items={myData}
        centerMode={true}
        autoplay={false}
        slidesToShow={3}
        draggable
        className={styles.carouselWrapper}
        renderItem={renderItem}
        arrows={true}
        infinite={false}
        dots={false}
      />
      <List
        className={styles.linkSection}
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item className={styles.linkItem}>
            <Link className={styles.NextLink} href={""}>
              {item.title}
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CitiesSection;
