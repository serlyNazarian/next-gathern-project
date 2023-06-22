import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const MyText = (props) => {
  const { children, type, strong, className, style, onClick, level } = props;

  return (
    <Text
      style={style}
      className={`my-text ${className || ""}`}
      type={type}
      level={level}
      strong={strong}
      onClick={onClick}
    >
      {children}
    </Text>
  );
};

export default MyText;
