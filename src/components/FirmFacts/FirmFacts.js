import React from "react";
import styles from "./FirmFacts.module.scss";
import FirmFactCard from "../FirmFactCard/FirmFactCard";
import Button from "../Button/Button";

const FirmFacts = () => {
  return (
    <div className={styles.firmFacts}>
      <h1 className={styles.title}>Firm Facts</h1>

      <hr className={styles.divider} />

      <div className={styles.grid}>
        <FirmFactCard variant="default">
          <Button variant="icon" icon="search">
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="default">
          <Button variant="default">This is a one line button</Button>
        </FirmFactCard>

        <FirmFactCard variant="default">
          <Button variant="icon" icon="search">
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="default">
          <Button variant="icon" icon="search">
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" icon="search">
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="border" disabled>
          <Button variant="icon" icon="search" disabled>
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" icon="search">
            This is a two line button that terminates with...
          </Button>
        </FirmFactCard>
      </div>
    </div>
  );
};

export default FirmFacts;
