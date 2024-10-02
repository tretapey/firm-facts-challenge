import React from "react";
import styles from "./FirmFactCard.module.scss";

const FirmFactCard = ({ variant = "default", disabled = false, children }) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FirmFactCard;
