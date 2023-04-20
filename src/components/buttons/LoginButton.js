import React, { useState } from "react";
import styles from "./button.module.css";
import { useTranslation } from "react-i18next";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";

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

  return (
    <>
      <Button
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
        width={1000}
      >
        <Form form={form} name="register" onFinish={onFinish}>
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
      </Modal>
    </>
  );
};

export default LoginButton;
