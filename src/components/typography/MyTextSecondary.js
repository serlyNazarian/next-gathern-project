import React from "react";
import MyText from "./MyText";

const MyTextSecondary = (props) => {
  const { children } = props;

  return (
    <MyText {...props} style={{ fontSize: 10 }} type="secondary">
      {children}
    </MyText>
  );
};

export default MyTextSecondary;
