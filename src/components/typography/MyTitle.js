import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const MyTitle = (props) => {
  const { level, children, className } = props;

  return (
    <Title className={className} level={level}>
      {children}
    </Title>
  );
};

export default MyTitle;
