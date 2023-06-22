import React from "react";
import MyTitle from "../typography/MyTitle";
import styles from "./typography.module.css";

const MyTypography = (props) => {
  const { children, level } = props;

  return (
    <MyTitle className={styles.MyTypographyTitle} level={level}>
      {children}
    </MyTitle>
  );
};

export default MyTypography;
