import React, { useState } from "react";
import styles from "./button.module.css";
import { useTranslation } from "react-i18next";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Space } from "antd";
import MyCarousel from "../carousel/MyCarousel";
import Image from "next/image";

const LoginButton = (props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
    {
      id: 4,
      image: "/images/dammam.png",
    },
    {
      id: 5,
      image: "/images/dammam.png",
    },
    {
      id: 6,
      image: "/images/dammam.png",
    },
    {
      id: 7,
      image: "/images/dammam.png",
    },
    {
      id: 8,
      image: "/images/dammam.png",
    },
    {
      id: 9,
      image: "/images/dammam.png",
    },
    {
      id: 10,
      image: "/images/dammam.png",
    },
    {
      id: 11,
      image: "/images/dammam.png",
    },
    {
      id: 12,
      image: "/images/dammam.png",
    },
    {
      id: 13,
      image: "/images/dammam.png",
    },
    {
      id: 14,
      image: "/images/dammam.png",
    },
    {
      id: 15,
      image: "/images/dammam.png",
    },
    {
      id: 16,
      image: "/images/dammam.png",
    },
    {
      id: 17,
      image: "/images/dammam.png",
    },
    {
      id: 18,
      image: "/images/dammam.png",
    },
  ];

  const renderItem = (item) => (
    <>
      <Card
        style={{
          width: 270,
        }}
        cover={<Image alt="example" src={item.image} />}
      >
        {/* <Meta title={"test"} /> */}
      </Card>
    </>
  );

  return (
    <>
      <Button
        type="primary"
        size="large"
        onClick={showModal}
        icon=<UserOutlined />
        className={styles.loginButton}
      >
        {t("WORD_LOGIN")}
        <DownOutlined />
      </Button>
      <Modal
        title={t("WORD_WELCOME")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        width={840}
        bodyStyle={{ height: "450px" }}
      >
        <Space>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ width: "70%" }}
          >
            <span>{t("WORD_ENTER_NUM_LOGIN")}</span>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
            <span>
              We will send a message to the entered number containing a code to
              continue. Make sure you enter your number correctly.
            </span>
          </Form>
          <MyCarousel
            items={myData}
            autoplay={false}
            draggable
            className={styles.carouselWrapper}
            renderItem={renderItem}
            infinite={false}
            arrows={false}
          />
        </Space>
      </Modal>
    </>
  );
};

export default LoginButton;
