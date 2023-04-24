import { Button, Carousel } from "antd";
import styles from "./carousel.module.css";
import Image from "next/image";

const myData = [
  {
    id: 1,
    title: "Apartments for monthly rental",
    text: " Browse the largest variety of spacious apartments in more than 205 cities and governorates in Saudi with facilities like self check in and more suitable for families and singles",
    button: false,
    buttonText: "",
    imageSource: "",
    image: false,
    imagePath: "/images/monthly-hero.png",
  },
  {
    id: 2,
    title: "Live the experience in Jazan",
    text: "With more than 29,000 properties in more than 185 cities and governorates in Saudi Arabia live an unforgettable experience in your second home",
    button: true,
    buttonText: "Browse holiday homes in jazan",
    imageSource: "Qandal Forest - Jazan",
    image: true,
    imagePath: "/images/hero-img-1.png",
  },
  {
    id: 3,
    title: "The beauty of nature in Abha",
    text: "Stay in the most beautiful places of housing provided by the people of Saudi Arabia such as apartments chalets farms rest houses camps and others",
    button: true,
    buttonText: "Browse holiday homes in Abha",
    imageSource: "Jacaranda - Abha",
    image: true,
    imagePath: "/images/hero-img-2.png",
  },
  {
    id: 4,
    title: "Brave the challenge in Asir",
    text: "You will find a variety of properties for daily weekly or monthly accommodation covering all of Saudi Arabia giving you unique experiences across the country",
    button: true,
    buttonText: "Browse holiday homes in Asir",
    imageSource: "Jabal al Qahar - Asir",
    image: true,
    imagePath: "/images/hero-img-3.png",
  },
  {
    id: 5,
    title: "Discover secrets of Alula",
    text: "Discover the spirit of Saudi Arabia where you will find global diversity and discover historic and ancient lands that were cradles to the first human civilizations",
    button: true,
    buttonText: "Browse holiday homes in Alula",
    imageSource: "Elephant Mountain - Alula",
    image: true,
    imagePath: "/images/hero-img-4.png",
  },
  {
    id: 6,
    title: "Summer without the heat in Sawda",
    text: "With more than 29 000 properties in more than 185 cities andgovernorates in Saudi Arabia live an unforgettable experience in yoursecond home",
    button: true,
    buttonText: "Browse holiday homes in Sawda",
    imageSource: "Jabal Sawda - Asir",
    image: true,
    imagePath: "/images/hero-img-5.png",
  },
  {
    id: 7,
    title: "",
    text: "",
    button: false,
    buttonText: "",
    imageSource: "",
    image: true,
    imagePath: "/images/web-SHB-ar.png",
  },
];

const MyCarousel = () => {
  return (
    <Carousel autoplay className={styles.carouselWrapper}>
      {myData?.map((item) => {
        const textDivClassName = `textDiv-${item.id}`;
        return (
          <div key={item.id}>
            <Image
              width={1000}
              height={450}
              className={styles.carouselImage}
              src={item.imagePath}
              alt="product"
              style={{ zIndex: -1 }}
            />
            <div
              className={`${styles.textDiv} ${textDivClassName}`}
              style={{
                position: "absolute",
                zIndex: "1",
                top: 100,
                color: "red",
              }}
            >
              {item.title ? <h3>{item.title}</h3> : null}
              <p>{item.text}</p>
              {item.button && <Button>{item.buttonText}</Button>}
              {item.imageSource && <span>{item.imageSource}</span>}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
