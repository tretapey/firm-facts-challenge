import React from "react";
import styles from "./Button.module.scss";
import SearchIcon from "../icons/Search";

const Button = ({ variant = "default", icon, disabled, children }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {icon && (
        <span className={styles.icon}>
          {icon === "search" ? <SearchIcon /> : icon}
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
